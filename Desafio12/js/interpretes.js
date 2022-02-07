async function buscarperson(idioma) {
    // Traigo personas
    let response = await fetch("https://api.themoviedb.org/3/trending/person/week?api_key=5e5fc3b9e60f1572acb749241e477ec9&language="+idioma)
            .then( response => response.json() )
            .then( json => {
                return json;
            });
      $('#personas').html('');
      indice=0;
      for (let persona of response.results) {
          if (persona.profile_path!=null) {
              indice++;
              $('#personas').append('<div id="columna'+indice+'" class="col-4 py-3"></div>');
              $('#columna'+indice).append('<div id="card'+indice+'" class="card"></div>');
              $('#card'+indice).append('<img class="card-img-top img_card" src="https://image.tmdb.org/t/p/w500/'+persona.profile_path+'">');
              $('#card'+indice).click(function(){
                  $('#detallePersona').modal('toggle');
                  $('#detallePersonaLabel').html(persona.name);
                  personaObj = buscarDatosPerson(persona.id); 
                  
                } );
              $('#card'+indice).append('<div id="card_body'+indice+'" class="card-body body_card" ></div>');
              $('#card_body'+indice).append('<h3 class="text-center text-white bg-dark p-1" >'+persona.name+'</h3>');
              for (let catalogo of persona.known_for) {
                  if (catalogo.title!=null) {
                      $('#card_body'+indice).append('<p class="text-dark" >'+catalogo.title+'</p>');
                  }
              }            
          }
      }      
  }


async function buscarDatosPerson(idPersona) {
    if ($('#toggle-event').prop('checked')) {idioma='es'}else{idioma='en'}
    $.ajax(
        'https://api.themoviedb.org/3/person/'+idPersona+'?api_key=5e5fc3b9e60f1572acb749241e477ec9&language='+idioma,
        {
            success: function(data) {
              $('#infoPersona').html(data.biography);
              $('#btnVerMas').click(
                function(){
                    window.location = "./interprete.html?interprete=" + data.id+'&lang='+idioma;
                }
            )              
            },
            error: function() {
              alert('Hubo un error al cargar los datos de la persona.');
            }
         }
      );
  }
 
     buscarperson('es');

  $(function() {
    $('#toggle-event').change(function() {
          if ($(this).prop('checked')) {
            buscarperson('es');
            loadMenu('es');
        }else{
            buscarperson('en');
            loadMenu('en');
        }
     })
  })