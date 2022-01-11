if (window.File && window.FileReader && window.FileList && window.Blob) {
  listaMarcasObj = new listaMarca(loadFile('./marcas.json'));
  listaAutosObj = new listaAuto(loadFile('./models.json'));
  let nombre = prompt('Ingresa su nombre completo');
  if (nombre=='') {
                alert('Debe ingresar su nombre');
         }else{
                marcaStr = listarMarcas() ;
                codigo = parseInt(prompt('Buen dia '+nombre+' estas son las marcas de los autos que tenemos \n'+marcaStr));
                filt = filtrarMarca(codigo);
                marcaObj = new Marca(filt[0].id,filt[0].nombre);
                listaModelos = listaAutosObj.filtro(marcaObj.id)
                modeloSeleccionado=filtrarModelos(listaModelos);
                autoSelected = new Auto(modeloSeleccionado.modelo,modeloSeleccionado.ano,modeloSeleccionado.marca,modeloSeleccionado.precio);
                confirmacion = parseInt(prompt('Este es el auto seleccionado\n'+
                                       'Modelo: '+ autoSelected.nombre+'\n'+
                                       'Marca: '+marcaObj.nombre+'\n'+
                                       'Año: '+autoSelected.ano+'\n'+
                                       'Precio: '+autoSelected.precio+' dolares\n'+
                                       'Si desea comprar este auto presione 1 en caso contraio presione 0'));       
                if (confirmacion==1) {
                    autoSelected.vender();
                    alert('Muchas gracias '+nombre+ ' acaba de comprar un '+autoSelected.nombre+' modelo '+autoSelected.ano);
                }else{
                    alert('Hasta luego');
                }

        }




} else {
    alert('Tu navegador es muy viejo ameo!');
  }

// Funcion para hacer el load del json
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
  // busco lista de marcas
  function listarMarcas() {
    let ltsMarcas='';
    for (let index = 0; index < listaMarcasObj.lista.length; index++) {
        ltsMarcas = ltsMarcas +   listaMarcasObj.lista[index].id + ' - ' + listaMarcasObj.lista[index].nombre + '\n';
    }  
    return ltsMarcas;
  }
// filtro lista de marcas por el codigo seleccionado
  function filtrarMarca(cod) {
    resultado = listaMarcasObj.lista.filter(function(element){
        if (parseInt(element.id)==cod) {
            return element;
        }
    });
    if (resultado.length>0) {
        return resultado;
    }else{
        alert('No existe una marca con ese codigo.');
    }  
  }  


  // Listas de modelos filtrados por marca
  function filtrarModelos(listaModelos) {
    let filtrado=''; 
    if (listaModelos.length>0) {     
        for (let index = 0; index < listaModelos.length; index++) {
            filtrado = filtrado +  (index+1)+ ' - Modelo: ' +   listaModelos[index].modelo + ' Año: ' + listaModelos[index].ano + '\n';
        } 
        modeloSelecte= parseInt(prompt('Estos son los modelos de la marca '+marcaObj.nombre+' que tenemos a dispocicion \n'+filtrado+' Seleccione el modelo que desee.'))-1;       
        return listaModelos[modeloSelecte];
    }else{
        alert('No hay modelos para la marca seleccionada.');
    } 
       
  }