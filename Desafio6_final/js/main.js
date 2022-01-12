const data = null;





var div = document.getElementById('movielista');

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        respuesta=JSON.parse(this.responseText);
        cuadrilla=1;
        for (let index = 0; index < respuesta.results.length; index++) {
            if (cuadrilla==1) {
                div.innerHTML+='<div class="box"><div class="head"><h2>Recomendadas de hoy</h2> <p class="text-right"><a href="#">Paginado</a></p></div>';
                div.innerHTML+=
                ' <div class="movie">'+
            '  <div class="movie-image"> '+
                '  <span class="play">'+
                    ' <span class="name">'+respuesta.results[index].title+'</span>'+
                '  </span> '+
                ' <a href="#"><img src="'+respuesta.results[index].backdropURLs[300]+'" alt="" /></a>'+
                '</div>'+
                '<div class="rating">'+
                
                '  <span class="comments">12</span> </div>'+
                '</div>   ';
                cuadrilla++;
            }else{
            if (cuadrilla==4) {
                div.innerHTML+='<div class="head"> <p class="text-right"><a href="#">Paginado</a></p></div><div class="cl">&nbsp;</div></div>';
                cuadrilla=1;
            }else{
                    div.innerHTML+=
                    ' <div class="movie">'+
                '  <div class="movie-image"> '+
                    '  <span class="play">'+
                        ' <span class="name">'+respuesta.results[index].title+'</span>'+
                    '  </span> '+
                    ' <a href="#"><img src="'+respuesta.results[index].backdropURLs[300]+'" alt="" /></a>'+
                    '</div>'+
                    '<div class="rating">'+
                    
                    '  <span class="comments">12</span> </div>'+
                    '</div>   ';
                    cuadrilla++;
                }
            }
        }
	}
});
xhr.open("GET", "https://streaming-availability.p.rapidapi.com/search/basic?country=ar&service=netflix&type=movie&genre=18&page=1&output_language=es&language=en");
xhr.setRequestHeader("x-rapidapi-host", "streaming-availability.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "1c11eee436msh8496ab99e17da93p1273bajsn5ca5cb6d342b");
xhr.send(data);