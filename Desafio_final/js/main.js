const data = null;





var div = document.getElementById('contenedor');
div.innerHTML=' <div class="col-12"><h2 class="mt-4 mb-4">Recomendadas</h2></div>';
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        respuesta=JSON.parse(this.responseText);
        cuadrilla=1;
        for (let index = 0; index < respuesta.results.length; index++) {

            div.innerHTML+=' <div class="card-box">'+
                                    '<div class="card-thumbnail">'+
                                        ' <img src="'+respuesta.results[index].backdropURLs[300]+'" class="img-fluid" alt="">'+
                                    '</div>'+
                                    '<h3><a href="#" class="mt-2 text-danger">'+respuesta.results[index].title+'</a></h3>'+
                                    '<p class="texto text-secondary">'+respuesta.results[index].overview+'</p>'+
              //  '                    <a href="#" class="btn btn-sm btn-danger float-right">Read more >></a>'+
                                 '</div>';
 console.log(respuesta.results[index]);
             

        }
       
	}
});
xhr.open("GET", "https://streaming-availability.p.rapidapi.com/search/basic?country=ar&service=netflix&type=movie&genre=18&page=1&output_language=es&language=en");
xhr.setRequestHeader("x-rapidapi-host", "streaming-availability.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "31eb1c3441mshc6026277ca8b916p1ac152jsn686380ee11db");
//xhr.setRequestHeader("x-rapidapi-key", "1c11eee436msh8496ab99e17da93p1273bajsn5ca5cb6d342b");
xhr.send(data);

/*
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

*/