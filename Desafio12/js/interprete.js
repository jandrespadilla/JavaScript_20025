function interprete(interprete,idioma='es') {
  if (idioma=='en') {
    $("#toggle-event").prop("checked", false)
  }    
  
    $.ajax(
        'https://api.themoviedb.org/3/person/'+interprete+'?api_key=5e5fc3b9e60f1572acb749241e477ec9&language='+idioma,
        {
            success: function(data) {
                    let div_grilla = document.getElementById("personas");
                    

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
                    } 
            },
            error: function() {
              alert('Hubo un error al cargar los datos de la persona.');
            }
         }
      );  
};
interprete(parametrosUrl('interprete'),parametrosUrl('lang')) 
function buscarFilmografia() {
  let filmografiaObj=  $.ajax(
        'https://api.themoviedb.org/3/person/'+parametrosUrl('interprete')+'/combined_credits?api_key=5e5fc3b9e60f1572acb749241e477ec9&language=es',
        {   async : false, 
            success: function(data) {
                    return data ;
            },
            error: function() {
              alert('Hubo un error al cargar los datos de la persona.');
            }
         }
      ); 
      return filmografiaObj.responseJSON;
}

$(function() {
  $('#toggle-event').change(function() {
      
        if ($(this).prop('checked')) {
        
          interprete(parametrosUrl('interprete'),'es');
          loadMenu('es');
           
      }else{
        
          loadMenu('en');
          interprete(parametrosUrl('interprete'),'en');
      }
   })
})