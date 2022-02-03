async function proximamente(idioma) {
    let filmografiaObj=  $.ajax(
        'https://api.themoviedb.org/3/movie/upcoming?api_key=5e5fc3b9e60f1572acb749241e477ec9&language='+idioma+'&page=1',
        {   async : false, 
            success: function(data) {
                return data;
            },
            error: function() {
              alert('Hubo un error al cargar los datos los proximos estrenos.');
            }
         }
      ); 
      loadProximamente(filmografiaObj.responseJSON.results,idioma);
  }

  function loadProximamente(data,idioma) {
    let div_grilla = document.getElementById("proximamente");
    div_grilla.innerHTML='';
    for (let proxima of data) {
        let columna = document.createElement("div");
        columna.className = "col-4 py-3";
        let encabezado = document.createElement("h3");
        encabezado.className = "text-center text-white bg-dark p-1";
        encabezado.innerHTML = proxima.title;
        let card = document.createElement("div");
        card.className = "card ";
        let poster = document.createElement("img");
        poster.className = "card-img-top img_card";
        poster.src = "https://image.tmdb.org/t/p/w300/" + proxima.poster_path;
        let link = document.createElement("a");
        link.href="./pelicula.html?idPeli=" + proxima.id+'&lang='+idioma;
        link.appendChild(poster);
        /*poster.onclick = () => {
           // alert(elenco)
            window.location = "./pelicula.html?idPeli=" + proxima.id;
        }*/
        let card_body = document.createElement("div");
        card_body.className = "card-body body_card";
        let parrafo = document.createElement("p");
        parrafo.className = "card-text text-dark";
      

        parrafo.innerHTML = proxima.overview;
        card_body.appendChild(encabezado);
        card_body.appendChild(parrafo);
        card.appendChild(link);
        card.appendChild(card_body);
        
        columna.appendChild(card);
        
        div_grilla.appendChild(columna);
       
    }
   /* for (let index = 0; index < data.length; index++) {
        dataHtml = dataHtml +data[index].title;         
        
        
    }       
    
    div_grilla.innerHTML=dataHtml;*/
  }
 
proximamente('es');

async function buscarActores(id,actoresArmados) {

    // Traigo actores
    let response = await fetch("https://api.themoviedb.org/3/movie/"+id+"/credits?api_key=5e5fc3b9e60f1572acb749241e477ec9&language=es")
            .then( response => response.json() )
            .then( json => {
                
                return json;
            });

      actores = await response;
      for (let index = 0; index < 5; index++) {
        const act = actores.cast[index];
        actoresArmados.push(act.name);
       
    }
     
      return actoresArmados;
  }
  $(function() {
    $('#toggle-event').change(function() {
        
          if ($(this).prop('checked')) {
            proximamente('es');
            
            loadMenu('es');
             
        }else{
            proximamente('en');
            loadMenu('en');
            
        }
     })
  })