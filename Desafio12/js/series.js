function loadSeries(grilla,idioma) {
    let div_grilla = document.getElementById("series");
     
    div_grilla.innerHTML='';
    for (let serie of grilla) {
        let columna = document.createElement("div");
        columna.className = "col-4 py-3";
        let encabezado = document.createElement("h2");
        encabezado.className = "text-center text-white bg-dark p-1";
        encabezado.innerHTML = serie.name;
        let card = document.createElement("div");
        card.className = "card";
        let poster = document.createElement("img");
        poster.className = "card-img-top";
        poster.src = "https://image.tmdb.org/t/p/w500/" + serie.poster_path;
        poster.onclick = () => {
            alert(serie.name);
        }
        let card_body = document.createElement("div");
        card_body.className = "card-body";
        let parrafo = document.createElement("p");
        parrafo.className = "card-text text-dark";
      

        parrafo.innerHTML = serie.overview;
        card_body.appendChild(encabezado);
        card_body.appendChild(parrafo);
        card.appendChild(poster);
        card.appendChild(card_body);
        
        columna.appendChild(card);
        
        div_grilla.appendChild(columna);
       
    }
}


async function buscarSeries(idioma) {

    // Traigo series
    let response = await fetch("https://api.themoviedb.org/3/trending/tv/week?api_key=5e5fc3b9e60f1572acb749241e477ec9&language="+idioma)
            .then( response => response.json() )
            .then( json => {
                
                return json;
            });
      grilla = await response;
     
      loadSeries(grilla.results,idioma);
      return grilla;
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