async function proximamente(idioma) {
    let filmografiaObj=  $.ajax(
        'https://api.themoviedb.org/3/movie/upcoming?api_key=5e5fc3b9e60f1572acb749241e477ec9&language='+idioma+'&page=1',
        {   async : false, 
            success: function(data) {
               // return data;
                $("#proximamente").slideUp("slow", function(){
                $('#proximamente').html('');
                indice=0;
                for (let proxima of data.results) {
                    indice++;
                    $('#proximamente').append('<div id="columna'+indice+'" class="col-4 py-3"></div>');
                    $('#columna'+indice).append('<div id="card'+indice+'" class="card"></div>');
                    $('#card'+indice).append('<a id="link'+indice+'" href="./pelicula.html?idPeli='+proxima.id+'&lang='+idioma+'"></a>');
                    $('#link'+indice).append('<img class="card-img-top img_card" src="https://image.tmdb.org/t/p/w300/'+proxima.poster_path+'">');
                    $('#card'+indice).append('<div id="card_body'+indice+'" class="card-body body_card" ></div>');
                    $('#card_body'+indice).append('<h3 class="text-center text-white bg-dark p-1" >'+proxima.title+'</h3>');
                    $('#card_body'+indice).append('<p class="card-text text-dark" >'+proxima.overview+'</p>');
                }   
                $("#proximamente").slideDown(2000);
              });                               
            },
            error: function() {
              alert('Hubo un error al cargar los datos los proximos estrenos.');
            }
         }
      ); 
  }
 
proximamente('es');

// Busco actores, todavia no la implemente en la card pero despues voy a incorporarla con mas detalles de la peli
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