function loadPerson(grilla,idioma) {
    let div_grilla = document.getElementById("personas");
   
    
    
    for (let persona of grilla) {
        if (persona.profile_path!=null) {
           // console.log(grilla);
            let columna = document.createElement("div");
            columna.className = "col-4 py-3";
            let encabezado = document.createElement("h2");
            encabezado.className = "text-center text-white bg-dark p-1";
            encabezado.innerHTML = persona.name;
            let card = document.createElement("div");
            card.className = "card";
            let poster = document.createElement("img");
            poster.className = "card-img-top";
            poster.src = "https://image.tmdb.org/t/p/w500/" + persona.profile_path;
            poster.onclick = function(){
                $('#detallePersona').modal('toggle');
                $('#detallePersonaLabel').html(persona.name);
                personaObj = buscarDatosPerson(persona.id); 
                
              } 
             
            let card_body = document.createElement("div");
            card_body.className = "card-body";
            let parrafo = document.createElement("p");
            parrafo.className = "card-text text-dark";
          
            for (let catalogo of persona.known_for) {
                if (catalogo.title!=null) {
                    parrafo.innerHTML = parrafo.innerHTML + catalogo.title +'<br>';
                }
               
            }
            card_body.appendChild(encabezado);
            card_body.appendChild(parrafo);
            card.appendChild(poster);
            card.appendChild(card_body);
            columna.appendChild(card);
            div_grilla.appendChild(columna);           
        }

       
    }
}


async function buscarperson(idioma) {

    // Traigo personas
    let response = await fetch("https://api.themoviedb.org/3/trending/person/week?api_key=5e5fc3b9e60f1572acb749241e477ec9&language="+idioma)
            .then( response => response.json() )
            .then( json => {
                
                return json;
            });
      grilla = await response;
      
      loadPerson(grilla.results,idioma);
      
      return grilla;
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
                    window.location = "./interprete.html?interprete=" + data.id;
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