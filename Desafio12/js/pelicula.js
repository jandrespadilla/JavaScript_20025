$(() => {
    $.ajax(
        'https://api.themoviedb.org/3/movie/'+parametrosUrl('idPeli')+'?api_key=5e5fc3b9e60f1572acb749241e477ec9&language=es',
        {
            success: function(data) {
                    let pelicula = document.getElementById("pelicula");
                   // pelicula.className = "divPeli";
                    
                    

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
                    
                   /* 
 <h2>Peliculas recomendadas de la semana</h2>
                    let columna = document.createElement("div");
                    columna.className = "tab-pane active";

                    let poster = document.createElement("img");
                    poster.className = "img-circle";
                    poster.src = "https://image.tmdb.org/t/p/w300/" + data.profile_path;

                    let encabezado = document.createElement("h3");
                    
                    encabezado.setAttribute('id','nombre');
                    encabezado.className = "media-heading";
                    let biografia = document.createElement("div");
 
                    let parrafo = document.createElement("p");
                    parrafo.setAttribute('id','biografia');
                    parrafo.className = "text-left";
                  
                    columna.appendChild(poster);
                    columna.appendChild(encabezado);
                    biografia.appendChild(parrafo);
                    columna.appendChild(biografia);
   
                    div_grilla.appendChild(columna);    
                    
                    
                    
                    $('#nombre').html(data.name);
                    $('#biografia').html(data.biography); 
                    let filmografia =  buscarFilmografia();
                    
                    for (let index = 0; index < filmografia.cast.length; index++) {
                       
                        console.log(filmografia.cast[index]);
                    } */
            },
            error: function() {
              alert('Hubo un error al cargar los datos de la persona.');
            }
         }
      );  
});


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