//Acceso por Object
//console.dir(document);
//console.dir(document.head);
//console.dir(document.body);



//Accesos a los Nodos
// Por ID del elemento
/*let div = document.getElementById("app");
let parrafo1 = document.getElementById("parrafo1");
let texto = parrafo1.innerText;
console.log(div);
console.log(parrafo1);
console.log(parrafo1.innerHTML);
parrafo1.innerHTML = "Hola <i>Mundo</i>!";
//parrafo1.innerText = "Hola <i>Mundo</i>!";
console.log(parrafo1.innerHTML);
console.log("El Título es: " + texto);*/

//let titulo = document.getElementById("encabezado");
//let texto = titulo.innerHTML.toUpperCase();
//console.log(texto);

//let resultado = document.getElementById("resultado");
//resultado.innerHTML = "Clase 8 de <strong>Javascript</strong>!";

//document.getElementById("resultado").innerHTML = "Clase 8 de <strong>Javascript</strong>!";



// Por Nombre de Clase
//var paises = document.getElementsByClassName("paises"); //Devuelve un Array de Elementos
/*console.log(paises);
console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML.length);
console.log(paises[2].innerHTML);*/



// Por Nombre de Etiqueta
//var contenedores = document.getElementsByTagName("div"); //Devuelve un Array de Elementos
/*console.log(contenedores);
console.log(contenedores[0].innerHTML);
console.log(contenedores[1].innerHTML);
console.log(contenedores[2].innerHTML);

let parrafos = document.getElementsByTagName("p");
console.log(parrafos);
console.log(parrafos[0].innerHTML);
parrafos[1].innerHTML = "Curso de <strong>Javascript</strong>";*/




// Recorrer los HTMLCollection
/*for (const pais of paises) {
    console.log(pais.innerHTML);
}

console.log("---");

for (const contenedor of contenedores) {
    console.log(contenedor.innerHTML);
}*/




// Agregando Elementos
/*let parrafo = document.createElement("p");
parrafo.innerHTML = "Curso de <strong>Javascript</strong> en <strong>Coderhouse</strong>";
document.body.appendChild(parrafo); //Agregamos al Body*/
/*let parrafo2 = document.createElement("p");
parrafo2.id = "parrafo2";
parrafo2.innerHTML = "Curso de <strong>DW</strong> en <strong>Coderhouse</strong>";

// Podemos agregar adentro de un Section o Div?
var noticias = document.getElementById("noticias");
noticias.appendChild(parrafo);
noticias.appendChild(parrafo2);
//console.log(document.body.innerHTML);*/

/*var paises = document.getElementById("paises");
var li = document.createElement("li");
li.innerHTML = "Brasil";
var li2 = document.createElement("li");
li2.innerHTML = "Perú";
paises.appendChild(li);
paises.appendChild(li2);*/



// Eliminando Elementos
//let parrafo_eliminar = document.getElementById("parrafo2");
//parrafo_eliminar.parentNode.removeChild(parrafo_eliminar);

//let paises = document.getElementById("paises");
//paises.parentNode.removeChild(paises);

// Otra forma
//var padre = parrafo_eliminar.parentNode;
//console.log(padre);
//padre.removeChild(parrafo_eliminar);

//let paises = document.getElementsByClassName("paises");
//paises[1].parentNode.removeChild(paises[1]);



// Obtengo valores
/*var email = document.getElementById("email");
var contrasena = document.getElementById("password").value;
console.log("Email: " + email.value);
console.log("Contraseña: " + contrasena);
console.log("Título: " + email.title);
email.title = "Ingresá tu EMAIL!";*/

/* function validarFormulario() {
    if ((contrasena == "") || (contrasena.length == 0)) {
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "Ingresá tu Contraseña!";
    }
}

validarFormulario(); */

// Asignar valores
/*document.getElementById("email").value = "homero@simpsons.com";
document.getElementById("password").value = "123456";

function obtenerDatos() {
    var email = document.getElementById("email").value;
    var contrasena = document.getElementById("contrasena").value;
    var elemento = document.createElement("p");
    elemento.innerHTML = `Mi email: ${email} y mi contraseña es: ${contrasena}`;
    document.body.appendChild(elemento);
}*/


/*
// Creando opciones desde un Array
let padre = document.getElementById("personas");
let personas = ["Homero", "Marge", "Bart", "Lisa", "Maggie"];

for (let persona of personas) {
    var elemento = document.createElement("li");
    elemento.innerHTML = persona;
    padre.appendChild(elemento);
}*/



// Plantillas literales
/*let producto = {id:1, nombre:"Arroz", precio:125};
let concatenado = "#1 - ID: " + producto.id +" - Producto: " + producto.nombre + " - $" + producto.precio;
let plantilla   = `#2 - ID: ${producto.id} - Producto: ${producto.nombre} - $${producto.precio}`;
//El valor es idéntico pero la construcción de la plantilla es màs sencilla
console.log(concatenado);
console.log(plantilla);*/



// Plantillas literales e innerHTML
/*let producto   = {id:1,  nombre:"Arroz", precio:125};
let contenedor = document.createElement("div");
//Definimos el innerHTML del elemento con una plantilla de texto
contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                        <p> Producto: ${producto.nombre}</p>
                        <b> $ ${producto.precio}</b>`;
//Agregamos el contenedor creado al body
//document.body.appendChild(contenedor);
document.getElementById("resultado").appendChild(contenedor);*/




const productos = [{id:1,  nombre:"Arroz", precio:125}, {id:2,  nombre:"Fideo", precio:150}, {id:3,  nombre:"Pan", precio:175}, {id:4,  nombre:"Flan", precio:200}];

for (const prod of productos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> ID: ${prod.id}</h3>
                            <p> Producto: ${prod.nombre}</p>
                            <b> $ ${prod.precio}</b>
                            <hr>`;
    //document.body.appendChild(contenedor);
    document.getElementById("resultado").appendChild(contenedor);
}