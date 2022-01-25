paginasArr = {'paginas': [],'total':1};
//const delay = (ms = 1000) => new Promise(r => setTimeout(r, ms));
async function buscarGrilla(paginas) {

    // Traigo pelis
    let response = await fetch("https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page="+paginas+"&output_language=en&language=en", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
          //  "x-rapidapi-key": "1c11eee436msh8496ab99e17da93p1273bajsn5ca5cb6d342b"
          //  "x-rapidapi-key": "31eb1c3441mshc6026277ca8b916p1ac152jsn686380ee11db"
          //  "x-rapidapi-key": "e1f3ada7d0msh55a67beb0ba4806p1ec3d1jsn03897ecbebf8"
            "x-rapidapi-key": "1c11eee436msh8496ab99e17da93p1273bajsn5ca5cb6d342b"
        }
    })
            .then( response => response.json() )
            .then( json => {
                
                return json;
            });
      grilla = await response;
      
     
    return grilla.results;
  }

 
  grillaRes = buscarGrilla(paginasArr.total);
  //await delay();
  sessionStorage.setItem("arrayPelis"+paginasArr.total, grillaRes);  
  for (let index = 1; index < 65; index++) {
    paginasArr.paginas.push(grillaRes)  
    sessionStorage.setItem("arrayPelis"+index, grillaRes);
    paginasArr.total=index;
   
    grillaRes= buscarGrilla(index);
   
 }         
 var div = document.getElementById('contenedor');
 for (let index = 1; index < 65; index++) {
 div.innerHTML=JSON.stringify(sessionStorage.getItem("arrayPelis"+index));
}  
  //let datos = buscarGrilla(paginas);
  console.log(sessionStorage.getItem("arrayPelis"));  
  
   