function loadPeliculas(peliculas) {
    let div_pelis = document.getElementById("galeria");
    
    
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
        poster.src = "https://image.tmdb.org/t/p/w500/" + pelis.poster_path;
        let elenco=Array();
        buscarActores(pelis.id,elenco);
        poster.onclick = () => {
            alert(elenco)
             
        }
        let card_body = document.createElement("div");
        card_body.className = "card-body";
        let parrafo = document.createElement("p");
        parrafo.className = "card-text text-dark";
      

        parrafo.innerHTML = pelis.overview;
        card_body.appendChild(encabezado);
        card_body.appendChild(parrafo);
        card.appendChild(poster);
        card.appendChild(card_body);
        
        columna.appendChild(card);
        
        div_pelis.appendChild(columna);
       
    }
}

 

async function buscarPelis() {

    // Traigo pelis
    let response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=5e5fc3b9e60f1572acb749241e477ec9&language=es")
            .then( response => response.json() )
            .then( json => {
                
                return json;
            });
      grilla = await response;
      loadPeliculas(grilla.results);
      return grilla;
  }


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
  
  grillatv = buscarPelis();

