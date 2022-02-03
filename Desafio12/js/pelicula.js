
function pelicula(pelicula,idioma) {
    

$.ajax(
        'https://api.themoviedb.org/3/movie/'+pelicula+'?api_key=5e5fc3b9e60f1572acb749241e477ec9&language='+idioma,
        {
            success: function(data) {

                    let pelicula = document.getElementById("pelicula");
                    pelicula.innerHTML='';
                    let columna = document.createElement("div");
                    columna.className = "row ";
                    let divPoster = document.createElement("div");
                    divPoster.className = " col";                    
                    let poster = document.createElement("img");
                    poster.className = "  imagenPeli inline";
                    poster.src = "https://image.tmdb.org/t/p/w500/" + data.poster_path; 
                    divPoster.appendChild(poster); 
                    let sinopsis = document.createElement("div");
                    sinopsis.className = "col";
                    let sinopsisParrafo = document.createElement("p");
                    sinopsisParrafo.className = "pSinopsis";

                    sinopsisParrafo.innerHTML=data.overview;
                    let titulo = document.createElement("h2");
                    titulo.innerHTML=data.title;
                    sinopsis.appendChild(titulo);
                    sinopsis.appendChild(sinopsisParrafo);           
                    let elenco=Array();
                    buscarActores(data.id,elenco);
                     
                    for (let persona of elenco) {

                    
                       // const act = elenco[index];
                       // console.log(persona[0]);
                       // sinopsis.appendChild(act.name);  
                       // actoresArmados.push();
                       
                    }                   
                    columna.appendChild(divPoster); 
                    columna.appendChild(sinopsis); 
                    pelicula.appendChild(columna); 
                    

            },
            error: function() {
              alert('Hubo un error al cargar los datos de la persona.');
            }
         }
      );  

}
pelicula(parametrosUrl('idPeli'),parametrosUrl('lang'));


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
        actoresArmados.push(act);
       
    }
     
      return actoresArmados;
  }

  $(function() {
    $('#toggle-event').change(function() {
        
          if ($(this).prop('checked')) {
          
            pelicula(parametrosUrl('idPeli'),'es');
            loadMenu(parametrosUrl('lang'));
             
        }else{
          
            loadMenu(parametrosUrl('lang'));
            pelicula(parametrosUrl('idPeli'),'en');
        }
     })
  })