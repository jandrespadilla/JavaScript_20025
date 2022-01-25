function loadPerson(grilla) {
    let div_grilla = document.getElementById("personas");
    let modal = document.getElementById("detallePersona");
    let infoPersona = document.getElementById("infoPersona");   
    
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

                modal.style.display = "show";
                 
                infoPersona.innerHTML = persona.name;
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


async function buscarperson() {

    // Traigo series
    let response = await fetch("https://api.themoviedb.org/3/trending/person/day?api_key=5e5fc3b9e60f1572acb749241e477ec9&language=es")
            .then( response => response.json() )
            .then( json => {
                
                return json;
            });
      grilla = await response;
    
      loadPerson(grilla.results);
      return grilla;
  }

  grillatv = buscarperson();
