function loadPeliculas(peliculas,idioma) {
    let div_pelis = document.getElementById("galeria");
    
    div_pelis.innerHTML='';
    for (let pelis of peliculas) {
        let columna = document.createElement("div");
        columna.className = "col-4 py-3";
        let encabezado = document.createElement("h2");
        encabezado.className = "text-center text-white bg-dark p-1";
        encabezado.innerHTML = pelis.title;
        let card = document.createElement("div");
        card.className = "card";
        let poster = document.createElement("img");
        poster.className = "card-img-top";
        poster.src = "https://image.tmdb.org/t/p/w300/" + pelis.poster_path;
       // let elenco=Array();
       // buscarActores(pelis.id,elenco);
        let link = document.createElement("a");
        link.href="./pelicula.html?idPeli=" + pelis.id+'&lang='+idioma;
        link.appendChild(poster);

        let card_body = document.createElement("div");
        card_body.className = "card-body";
        let parrafo = document.createElement("p");
        parrafo.className = "card-text text-dark";
      

        parrafo.innerHTML = pelis.overview;
        card_body.appendChild(encabezado);
        card_body.appendChild(parrafo);
        card.appendChild(link);
        card.appendChild(card_body);
        
        columna.appendChild(card);
        
        div_pelis.appendChild(columna);
       
    }
}

 

async function buscarPelis(idioma) {

    // Traigo pelis
    let response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=5e5fc3b9e60f1572acb749241e477ec9&language="+idioma)
            .then( response => response.json() )
            .then( json => {
                
                return json;
            });
      grilla = await response;
      loadPeliculas(grilla.results,idioma);
      return grilla;
  }


  async function buscarActores(id,actoresArmados,idioma) {

    // Traigo actores
    let response = await fetch("https://api.themoviedb.org/3/movie/"+id+"/credits?api_key=5e5fc3b9e60f1572acb749241e477ec9&language="+idioma)
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
  
 buscarPelis('es');

 $(function() {
    $('#toggle-event').change(function() {
        
          if ($(this).prop('checked')) {
            buscarPelis('es');
            
            loadMenu('es');
             
        }else{
            buscarPelis('en');
            loadMenu('en');
            
        }
     })
  })