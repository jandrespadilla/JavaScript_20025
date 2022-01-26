
// Con DOM
/* window.addEventListener("DOMContentLoaded", function () {
    console.log("El DOM esta listo (Javascript)");
}); */


// Con jQuery
/* $(document).ready(function() {
   console.log("El DOM esta listo (jQuery)");
   let mensaje = "Curso de <strong>Javascript</strong>";
   $("#app").html(mensaje);
}); */

function mostrarMensaje() {
    let mensaje = "Curso de <strong>Javascript</strong>";
    $("#app").html(mensaje);
}

/*
//Forma corta de ready()
$(function() {
    console.log('El DOM esta listo (forma corta)');
    mostrarMensaje();
});*/


//Forma corta con arrow function
/* $(() => {
    console.log('El DOM esta listo (con arrow function)');
    mostrarMensaje();
}); */


/*
// Cuando queremos validar si todo el contenido está cargado (incluídos textos e imágenes)
window.addEventListener('load', function() {
    console.log('Todos los elementos de la ventana están cargados');
});*/



//Agregamos un botón al body como primer elemento
/* $('body').append('<button id="btnjQuery">CLICK</button>');

//Asociamos el evento click al botón creado
$('#btnjQuery').on('click', function () {
    console.log("Respuesta a un click");
});

$('#btnjQuery').on('dblclick', () => {
    console.log("Respuesta al doble click");
    mostrarMensaje();
}); */

/* $('#app').on('click', function () {
    console.log("Respuesta a un click en el DIV #App");
});

$('#app').on('dblclick', function () {
    console.log("Respuesta a un doble click en el DIV #App");
}); */



// Array de objetos para agregar información al DOM.
/* const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
{  id: 2,  nombre: "Fideo", precio: 70 },
{  id: 3,  nombre: "Pan"  , precio: 50},
{  id: 4,  nombre: "Flan" , precio: 100}];

// Recorremos el array con for..of
for (const producto of productos) {
    //Por cada producto además de los datos agregamos un botón 
    $("#app").append(`<div>
                        <h4>Producto: ${producto.nombre}</h4>
                        <b>$ ${producto.precio}</b>
                        <button id="btn${producto.id}">Comprar</button>
                        <hr>
                        </div>`);
    
    //Asociamos el evento a botón recién creado.
    $(`#btn${producto.id}`).on('click', function () {
        console.log(`Compreaste ${producto.nombre}`);
        alert("Compraste: " + producto.nombre);
    });
} */


/*
//Agregamos dos botones con jQuery
$("body").prepend('<button id="btn1">BUTTON 1</button>');
$("body").prepend('<button id="btn2">BUTTON 2</button>');

//Asociamos el evento click para btn1
$("#btn1").click(function() { 
    console.log(this);
});

//Evento click para btn2 con Arrow function y parámetro e
$("#btn2").click((e) => { 
    console.log(e.target);
});*/


/*
//Agregamos inputs con jQuery
$("body").prepend(`<input type="text" class="inputsClass">
                   <input type="number" class="inputsClass">
                   <select id='selector_numero'>
                        <option value="1" selected >ID 1</option>
                        <option value="2">ID 2</option>
                        <option value="3">ID 3</option>
                    </select>`);

//Asociamos el evento change a todos los inputs
$(".inputsClass").change(function (e) { 
    //console.log(e.target.value);
    console.log(this.value);
});

$("#selector_numero").change(function (e) {
    console.log("Seleccionaste: " + this.value);
});*/


/*
//Agregamos un formulario con jQuery
$("body").prepend(`<form id="myForm">
                       <input id='campo1' type="text"  >
                       <input id='campo2' type="number">
                       <input id='envio_form' type="button" value='Enviar Datos'>
                   </form>`);*/
/*
//Asociamos el evento submit al formulario con botón 'submit'
$("#myForm").submit(function (e) {
    //Prevenimos el comportamiento de submit 
    e.preventDefault();
    //Obtenemos hijos del formulario
    let hijos = $(e.target).children();
    //console.log(hijos);
    //console.log(typeof hijos);
    //Primer input type="text"
    console.log(hijos[0].value);
    //Primer input type="number"
    console.log(hijos[1].value); 
});*/
/*
//Asociamos el evento click al formulario con botón 'button'
$("#envio_form").click(function() {
    //Primer input type="text"
    console.log($("#campo1").val());
    //Primer input type="number"
    console.log($("#campo2").val());
    //alert("Antes de enviar el Formulario");
    $("#myForm").submit();
})*/


/*
//Agregamos un botón y un input
$("body").prepend('<button id="btn1">BUTTON</button>');
$("body").prepend('<input  id="ipt1" type="text">');

//Asociamos el evento change al ipt1
$("#ipt1").change((e) => { 
    alert("El valor es " + e.target.value);
});

$("#ipt1").click((e) => { 
    console.log("Ingresaste al campo de Texto!");
});

//Asociamos el evento click para btn1 y usamos trigger
$("#btn1").click(() => { 
    //Usamos trigger para disparar el evento change de ipt1 
    $("#ipt1").trigger("change");
    //$("#ipt1").change(); //equivalente al de arriba
    //mostrarMensaje();
});*/


/*
// Array de objetos para agregar información al DOM.
const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
{  id: 2,  nombre: "Fideo", precio: 70 },
{  id: 3,  nombre: "Pan"  , precio: 50},
{  id: 4,  nombre: "Flan" , precio: 100}];

// Asociamos el evento click en ready luego del DOM Generado
$(document).ready(function () {
    $(".btnComprar").click(function (e) { 
        //Obtenemos hijos del padre <div> desde el target
        let hijos = $(e.target).parent().children();
        //Primer input, valor de ID oculto
        console.log("El valor es: " + hijos[0].value);
        console.log("El precio es: " + hijos[2].innerHTML);
    });
});

// Recorremos el array con for..of
for (const producto of productos) {
    //Por cada producto además de los datos agregamos un botón 
    $("#app").append(`<div>
                        <input value="${producto.id}" type="hidden">
                        <h4>  Producto: ${producto.nombre}</h4>
                        <b> $ ${producto.precio}</b>
                        <button class="btnComprar">Comprar</button>
                    </div>`);
}*/


// Ejemplo de Formulario
function enviarDatos() {
    let nombre = $("#nombre").val(); //document.getElementById("nombre").value; Equivalente en DOM
    let email = $("#email").val();
    let mensaje = "Nombre: <b> " + nombre + "</b><br>" + "Email: <b> " + email +  "</b>";
    $("#app").html(mensaje);
}

$("#boton").click(function() {
    enviarDatos();
})