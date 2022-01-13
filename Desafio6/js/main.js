getDolarArData();
function arranco() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
     listaMarcasObj = new listaMarca(loadFile('./js/marcas.json'));
     listaAutosObj = new listaAuto(loadFile('./js/models.json'));
    nombre = prompt('Ingresa su nombre completo');
    
    if ((nombre=='')||(nombre==null)) {
                  alert('Debe ingresar su nombre');
                  arranco();
           }else{
                cotizoAuto(nombre)
          }
  } else {
      alert('Tu navegador es muy viejo ameo!');
    }
}

arranco();

function cotizoAuto(nombre) {
  filt =selecMarca(nombre,listarMarcas());
  marcaObj = new Marca(filt[0].id,filt[0].nombre);
  autoSelected=filtrarModelos(listaAutosObj.filtro(marcaObj.id));
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

function selecMarca(nom,marcaStr) {
  let codigo = parseInt(prompt('Buen dia '+nom+' estas son las marcas de los autos que tenemos \n'+marcaStr));
  let resfil = filtrarMarca(codigo);
  if (resfil.length>0) {
      return resfil;
  }else{
      alert('No existe una marca con ese codigo.');
      cotizoAuto(nom);
  }  
  
}


// filtro lista de marcas por el codigo seleccionado
  function filtrarMarca(cod) {
   let resultado = listaMarcasObj.lista.filter(function(element){
        if (parseInt(element.id)==cod) {
            return element;
        }
    });
    return resultado;
  }  


  // Listas de modelos filtrados por marca
  function filtrarModelos(listaModelos) {
    let filtrado=''; 
    if (listaModelos.length>0) {     
        for (let index = 0; index < listaModelos.length; index++) {
            filtrado = filtrado +  (index+1)+ ' - Modelo: ' +   listaModelos[index].modelo + ' Año: ' + listaModelos[index].ano + '\n';
        } 
        modeloSelecte = parseInt(prompt('Estos son los modelos de la marca '+marcaObj.nombre+' que tenemos a dispocicion \n'+filtrado+' Seleccione el modelo que desee.'))-1;       
        
        if (listaModelos[modeloSelecte] == undefined) {
          alert('No existe el modelo seleccionado.');
          filtrarModelos(listaModelos);
        }else{
         
          modelSelect = new Auto(listaModelos[modeloSelecte].modelo,listaModelos[modeloSelecte].ano,listaModelos[modeloSelecte].marca,listaModelos[modeloSelecte].precio);
          if (modelSelect instanceof Auto) {
            mostrarSeleccionado(modelSelect);
          }else{
            alert('No existe el modelo seleccionado.');
            filtrarModelos(listaModelos);
          }
        }
    }else{
        alert('No hay modelos para la marca seleccionada.');
        filtrarModelos(listaModelos);
    } 
       
  }

  function mostrarSeleccionado(autoSelecionado) {
          
            confirmacion = parseInt(prompt('Este es el auto seleccionado\n'+
            'Modelo: '+ autoSelecionado.nombre+'\n'+
            'Marca: '+marcaObj.nombre+'\n'+
            'Año: '+autoSelecionado.ano+'\n'+
            'Precio Dolar: '+autoSelecionado.precio+' dolares\n'+
            'Si desea comprar este auto presione 1 en caso contraio presione 0'));       
              if (confirmacion==1) {
                autoSelecionado.vender();
                alert('Muchas gracias '+nombre+ ' acaba de comprar un '+autoSelecionado.nombre+' modelo '+autoSelecionado.ano);
              }else{
                alert('Hasta luego');
              }
  }


