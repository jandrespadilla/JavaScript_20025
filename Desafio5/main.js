 // Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
    // Great success! All the File APIs are supported.
  } else {
    alert('Tu navegador es muy viejo ameo!');
  }

  function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = JSON.parse(xmlhttp.responseText);
    }
    return result;
  }
  listaMarcasObj = new listaMarca(loadFile('./marcas.json'));
  listaAutosObj = new listaAuto(loadFile('./models.json'));
  let nombre = prompt('Ingresa su nombre completo');
  if (nombre=='') {
      alert('Debe ingresar su nombre');
       
  }else{
    let marcaStr='';
    for (let index = 0; index < listaMarcasObj.lista.length; index++) {
        marcaStr = marcaStr +   listaMarcasObj.lista[index].id + ' - ' + listaMarcasObj.lista[index].nombre + '\n';
   }
  codigo = parseFloat(prompt('Buen dia '+nombre+' estas son las marcas de los autos que tenemos \n'+marcaStr));
  const filt = listaMarcasObj.lista.filter(function(element){
      if (element['id']==codigo) {
        return element;
      }
       
   
  });
   alert(filt.nombre);
  }