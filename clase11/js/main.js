//Acceso equivalente: document.getElementById("listaPaises");
/* let paises = $("#listaPaises");
console.log("Ejemplo #1");
console.log(paises);
console.log(typeof paises); */

// Acceso equivalente: document.getElementsByClassName("paises")
/* let paises2 = $(".paises");
console.log("Ejemplo #2");
console.log(paises2);
console.log(paises2[1]); */

// Acceso equivalente: document.getElementsByTagName("li")
/* let paises3 = $("li");
console.log("Ejemplo #3");
console.log(paises3);
console.log(paises3[1].innerHTML()); */


/*
let contenedores = $("div"); //selecciona todos los <div> de la página
console.log("Ejemplo #4");
console.log(contenedores);
console.log(typeof contenedores);*/
/*
let enlaces = $("a"); //selecciona todos los <a>
console.log("Ejemplo #5");
console.log(enlaces);
console.log(enlaces[1].innerHTML + " y su link es: " + enlaces[1].href);*/
/*
let parrafos_enlaces = $( "p, a" ); //seleccionar todas los los <p>, y los <a>
console.log("Ejemplo #6");
console.log(parrafos_enlaces);
console.log(parrafos_enlaces[2].innerHTML);*/
/*
let list_items = $("li.paises" ); //seleccionar todo <li> con clase "nombre-clase", y que tengan un hijo con ID "caja"
console.log("Ejemplo #7");
console.log(list_items);
console.log("Cantidad: " + list_items.length);*/


/*
let ultimo = $( "p:last" );                 //Selecciona el último <p> de la página
console.log("Ejemplo #8");
console.log(ultimo);
console.log(ultimo[0].innerHTML);*/
/*
let first_child = $( "li:first-child" );         //Selecciona todos los <li> que son primeros hijos
console.log("Ejemplo #9");
console.log(first_child);
console.log(first_child[0].innerHTML);*/
/*
let last_child = $( "li:last-child" );         //Selecciona todos los <li> que son últimos hijos
console.log("Ejemplo #10");
console.log(last_child);
console.log(last_child[0].innerHTML);*/
/*
let only_child = $( "li:only-child" );         //Selecciona todos los <li> que sean hijos únicos
console.log("Ejemplo #11");
console.log(only_child);
console.log(only_child[0].innerHTML);*/
/*
let nth_child = $( "li:nth-child(3)" );         //Selecciona todos los <li> que sean el 3er elemento
console.log("Ejemplo #12");
console.log(nth_child);
console.log(nth_child[0].innerHTML);*/
/*
let nth_child_odd = $( "li:nth-child(odd)" );     //Selecciona todos los <tr> que sean impares
console.log("Ejemplo #13");
console.log(nth_child_odd);

for (let elem of nth_child_odd) {
    console.log("Item: " + elem.innerHTML);
}*/
/*
let nth_child_even = $( "li:nth-child(even)" );     //Selecciona todos los <tr> que sean pares
console.log("Ejemplo #14");
console.log(nth_child_even);

for (let elem of nth_child_even) {
    console.log("Item: " + elem.innerHTML);
}*/
/*
let nth_child_3n = $( "p:nth-child(3n)" );     //Selecciona cada tercer elemento <div>
console.log("Ejemplo #15");
console.log(nth_child_3n);

for (let elem of nth_child_3n) {
    console.log("Item: " + elem.innerHTML);
}*/


/*
let texto = $( ":text" );
console.log("Ejemplo #16");
console.log(texto);

for (let elem of texto) {
    console.log("Item: " + elem.placeholder);
}*/

/*
let checkbox = $( ":checkbox" );
console.log("Ejemplo #17");
console.log(checkbox);
console.log(typeof checkbox);

let radio = $( ":radio" );
console.log("Ejemplo #18");
console.log(checkbox);
console.log(typeof checkbox);

$( ":img" );
$( ":submit" );
$( ":reset" );
$( ":password" );
$( ":file" );*/
/*
let inputs = $( ":input" );     //Selecciona los elementos input, textarea,select y button
console.log("Ejemplo #19");
console.log(inputs);

for (let elem of inputs) {
    console.log("Item: " + elem.id + " - Clase: " + elem.className);
}*/

/*
let botones = $( ":button" );     //Selecciona los elementos button e input con atributo "type"="button"
console.log("Ejemplo #20");
console.log(botones);

for (let elem of botones) {
    console.log("Item: " + elem.id + " - Clase: " + elem.className);
}*/
/*
let enabled = $( ":enabled" );    //Selecciona los elementos del formulario activados
console.log("Ejemplo #21");
console.log(enabled);

for (let elem of enabled) {
    console.log("Item: " + elem.id + " - Clase: " + elem.className);
}*/
/*
let disabled = $( ":disabled" );     //Selecciona los elementos del formulario desactivados
console.log("Ejemplo #22");
console.log(disabled);

for (let elem of disabled) {
    console.log("Item: " + elem.id + " - Clase: " + elem.className + " - Value: " + elem.value);
}*/
/*
let checkeados = $( ":checked" );     //Selecciona los radio buttons y checkboxes que están pulsados
console.log("Ejemplo #23");
console.log(checkeados);

for (let elem of checkeados) {
    console.log("Item: " + elem.id + " - Valor: " + elem.value);
}*/
/*
let seleccionados = $( ":selected" );     //Elementos de una lista de opciones que este seleccionados
console.log("Ejemplo #24");
console.log(seleccionados);

for (let elem of seleccionados) {
    console.log("Item: " + elem.id + " - Valor: " + elem.value);
}*/

/*
$("#notificacion").append("<p>Hola <strong>Mundo</strong>!</p>");
$("body").append("<p>Hola <strong>Mundo</strong>!</p>");

let producto = {id:1, nombre:"Pan", precio:120};
$("#notificacion").append(`<p class='text-white bg-black p-1'><b>ID:</b> ${producto.id}<br>
                            <b>Nombre:</b> ${producto.nombre}<br>
                            <b>Precio:</b> ${producto.precio}</p>`);

let producto2 = {id:2, nombre:"Queso", precio:250};
$("#notificacion").prepend(`<p class='text-white bg-black p-1'><b>ID:</b> ${producto2.id}<br>
                            <b>Nombre:</b> ${producto2.nombre}<br>
                            <b>Precio:</b> ${producto2.precio}</p>`);*/

/* let productos = [{id:1, nombre:"Pan", precio:120},
                 {id:2, nombre:"Queso", precio:250},
                 {id:3, nombre:"Jamón", precio:1850}];

for (let prod of productos) {
    $("#notificacion").append(`<p class='text-white bg-black p-1'><b>ID:</b> ${prod.id}<br>
                            <b>Nombre:</b> ${prod.nombre}<br>
                            <b>Precio:</b> ${prod.precio}</p>`);
} */