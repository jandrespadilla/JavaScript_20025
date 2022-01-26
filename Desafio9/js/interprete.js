$(() => {
    $.ajax(
        'https://api.themoviedb.org/3/person/'+parametrosUrl('interprete')+'?api_key=5e5fc3b9e60f1572acb749241e477ec9&language=es',
        {
            success: function(data) {
                    alert("Hello  your ID is " + data.name);  
            },
            error: function() {
              alert('Hubo un error al cargar los datos de la persona.');
            }
         }
      );  
});
