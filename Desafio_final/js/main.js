async function buscarGrilla(paginasObj) {

    // read our JSON
    let response = await fetch("https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page="+paginasObj.total+"&output_language=en&language=en", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
           // "x-rapidapi-key": "1c11eee436msh8496ab99e17da93p1273bajsn5ca5cb6d342b"
            "x-rapidapi-key": "31eb1c3441mshc6026277ca8b916p1ac152jsn686380ee11db"
        }
    })
            .then( response => response.json() )
            .then( json => {
                
                return json;
            });
    let grilla = await response;
    for (let index = paginasObj.total; index < grilla.total_pages; index++) {
        paginasObj.paginas.push(grilla.results)  
        paginasObj.total=index;
        buscarGrilla(paginasObj);
     }         
   
   
    return paginasObj;
  }
  paginas = {'paginas': [],'total':1};
 
  let datos = buscarGrilla(paginas);
  console.log(datos);  
  
   