async function buscarPelis(idioma) {
    let filmografiaObj=  $.ajax(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=5e5fc3b9e60f1572acb749241e477ec9&language="+idioma,
        {   async : false, 
            success: function(data) {
               // return data;
                $('#galeria').html('');
                indice=0;
                for (let proxima of data.results) {
                    indice++;
                    $('#galeria').append('<div id="columna'+indice+'" class="col-4 py-3"></div>');
                    $('#columna'+indice).append('<div id="card'+indice+'" class="card"></div>');
                    $('#card'+indice).append('<a id="link'+indice+'" href="./pelicula.html?idPeli='+proxima.id+'&lang='+idioma+'"></a>');
                    $('#link'+indice).append('<img class="card-img-top img_card" src="https://image.tmdb.org/t/p/w300/'+proxima.poster_path+'">');
                    $('#card'+indice).append('<div id="card_body'+indice+'" class="card-body body_card" ></div>');
                    $('#card_body'+indice).append('<h3 class="text-center text-white bg-dark p-1" >'+proxima.title+'</h3>');
                    $('#card_body'+indice).append('<p class="card-text text-dark" >'+proxima.overview+'</p>');
                }                
            },
            error: function() {
              alert('Hubo un error al cargar los datos los proximos estrenos.');
            }
         }
      ); 
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