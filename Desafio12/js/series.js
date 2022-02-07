async function buscarSeries(idioma) {
    // Traigo series
    let response = await fetch("https://api.themoviedb.org/3/trending/tv/week?api_key=5e5fc3b9e60f1572acb749241e477ec9&language="+idioma)
            .then( response => response.json() )
            .then( json => {
                return json;
            });
            $('#series').html('');
            indice=0;
            for (let serie of response.results) {
                indice++;
                $('#series').append('<div id="columna'+indice+'" class="col-4 py-3"></div>');
                $('#columna'+indice).append('<div id="card'+indice+'" class="card"></div>');
                $('#card'+indice).append('<a id="link'+indice+'" href="./pelicula.html?idPeli='+serie.id+'&lang='+idioma+'"></a>');
                $('#link'+indice).append('<img class="card-img-top img_card" src="https://image.tmdb.org/t/p/w300/'+serie.poster_path+'">');
                $('#card'+indice).append('<div id="card_body'+indice+'" class="card-body body_card" ></div>');
                $('#card_body'+indice).append('<h3 class="text-center text-white bg-dark p-1" >'+serie.name+'</h3>');
                $('#card_body'+indice).append('<p class="card-text text-dark" >'+serie.overview+'</p>');
            }              
  }

buscarSeries('es');
  $(function() {
    $('#toggle-event').change(function() {
          if ($(this).prop('checked')) {
            buscarSeries('es');
            loadMenu('es');
        }else{
            buscarSeries('en');
            loadMenu('en');
        }
     })
  })