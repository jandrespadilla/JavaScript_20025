
// Inicializo las variables con Local Storage
/*localStorage.setItem("bienvenida", "Hola Coderhouse!");
localStorage.setItem("esValido", true);
localStorage.setItem("unNumero", parseInt("0303"));
localStorage.setItem("tuNombre", prompt("Ingresá tu Nombre:"));
localStorage.setItem("sebas", "Hola, Sebas!");

let mensaje = localStorage.getItem("bienvenida");
let bandera = localStorage.getItem("esValido");
let numero = localStorage.getItem("unNumero");
/*let valor_sebas = localStorage.getItem("sebas");
alert("Nombre: " + valor_sebas.toUpperCase());
localStorage.setItem("sebas", "Yo soy Seba!");
valor_sebas = localStorage.getItem("sebas");
alert("Nombre: " + valor_sebas.toLowerCase());

console.log("Mensaje: " + mensaje);
console.log("Bandera: " + bandera);
console.log("Número: " + numero);
console.log("Tu Nombre: " + localStorage.getItem("tuNombre"));
console.log(typeof mensaje);
console.log(typeof bandera);
console.log(typeof numero);
console.log(typeof localStorage.getItem("tuNombre"));*/




// Inicializo las variables con Session Storage
/*sessionStorage.setItem("seleccionados", [1, 2, 3]);
sessionStorage.setItem("esValido", false);
sessionStorage.setItem("email", "info@coderhouse.com");
sessionStorage.setItem("numero", 123);*/
//sessionStorage.setItem("sebas", "Hola, soy Sebas!");

/*let lista = sessionStorage.getItem("seleccionados").split(",");
let bandera = (sessionStorage.getItem("esValido") == "true");
let email = sessionStorage.getItem("email");
let numero = parseInt(sessionStorage.getItem("numero"));


console.log("Lista: " + lista);
console.log("Bandera: " + bandera);
console.log("Email: " + email);
console.log(typeof lista);
console.log(typeof bandera);
console.log(typeof email);
console.log(typeof numero);*/
//alert("Nombre: " + sessionStorage.getItem("sebas"));




//Acceso tipo Objetos
/*localStorage.numeroPrueba = 5;
alert("es: " + localStorage.numeroPrueba);
localStorage.setItem("numeroPrueba", 6);
alert("ess: " + localStorage.getItem("numeroPrueba"));*/
/*
let clave = "toString";
localStorage[clave] = "6";
alert("es: " + localStorage.clave);*/




//Recorriendo los localStorage
/*let local = localStorage.length;
alert("Tengo " + local + " localStorages!");

for (let i=0; i<localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: " + clave + " - " + "Valor: " + localStorage.getItem(clave));
}
console.log("FIN de LocalStorage");*/
/*sessionStorage.setItem("sebas", "Hola, soy Sebas!");
let session = sessionStorage.length;
alert("Tengo " + session + " sessionStorages!");

for (let i=0; i<sessionStorage.length; i++) {
    let clave = sessionStorage.key(i);
    console.log("Clave: " + clave + " - " + "Valor: " + sessionStorage.getItem(clave));
}
console.log("FIN de SessionStorage");*/




//Eliminar los Datos de los Storages 
//localStorage.setItem("bienvenida", "Hola chicos!");
//let local = localStorage.length;
//alert("Tengo " + local + " localStorages!");
/*localStorage.removeItem("bienvenida"); // Elimina 1 ítem
local = localStorage.length;
alert("Tengo " + local + " localStorages!");
alert(localStorage.getItem("bienvenida"));*/
/*localStorage.clear(); // Elimina todos los ítems*/
/*local = localStorage.length;
alert("Tengo " + local + " localStorages!");*/

/*
sessionStorage.setItem("sebas", "Hola gente, soy Sebas!");
let session = sessionStorage.length;
alert("Tengo " + session + " sessionStorages!");
alert(sessionStorage.getItem("sebas"));
/*sessionStorage.removeItem("sebas"); // Elimina 1 ítem
session = sessionStorage.length;
alert("Tengo " + session + " sessionStorages!");*/
//sessionStorage.clear(); // Elimina todos los ítems*/
/*session = sessionStorage.length;
alert("Tengo " + session + " sessionStorages!");*/

/*
localStorage.clear();
//Ejemplo aplicado
const multiplicar = (a, b) => a * b;
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
let ingresarNumero = parseInt(prompt("Ingresar número"));

for (let i=1; i<=10; i++) {
    guardarLocal(i, multiplicar(ingresarNumero, i));
}
alert("Valores: "+ localStorage.length);

for (let i=0; i<localStorage.length; i++) {
    let clave = localStorage.key(i);
    let valor = localStorage.getItem(clave);
    alert("Clave: " + clave + " - Valor: " + valor);
}*/






/*const producto1 = {id:1, producto:"Arroz"};
localStorage.setItem("producto1", producto1);
console.log("Es: " + localStorage.getItem("producto1"));*/




/*const producto1 = {id:2, producto:"Arroz"};
//const enJSON = JSON.stringify(producto1);
console.log(producto1);
console.log(enJSON);
console.log(typeof producto1);
console.log(typeof enJSON);

//localStorage.setItem("producto1", enJSON);
localStorage.setItem("producto1", JSON.stringify(producto1));
console.log(localStorage.getItem("producto1"));*/


/*onst enJSON = '{"id":2, "producto":"Arroz", "prod_relacionados":[1, 2, 3]}';
const producto1 = JSON.parse(enJSON);
console.log(producto1);
console.log(producto1.producto);
console.log(producto1.prod_relacionados);
console.log(typeof enJSON);
console.log(typeof producto1);


console.log(localStorage.getItem("producto1"));
console.log(typeof localStorage.getItem("producto1"));
const producto2 = JSON.parse(localStorage.getItem("producto1"));
console.log("ID: " + producto2.id);
console.log("Producto: " + producto2.producto);*/


/*
function guardarDatos() {
    let var1 = prompt("Ingrese su nombre");
    localStorage.setItem("nombre", var1);
}

function recuperarDatos() {
    let nombre = localStorage.getItem("nombre");
    console.log("Nombre: " + nombre);
}*/



/*
const productos = [{id:1, producto:"Arroz", precio: 125}, {id:2, producto:"Harina", precio: 150}, {id:3, producto:"Coca Cola", precio: 180}];
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
    //localStorage.setItem(producto.id, producto);
}

guardarLocal("listaProductos", JSON.stringify(productos));

console.log("Item 1: " + localStorage.getItem("1"));
console.log("Item 3: " + localStorage.getItem("3"));
console.log("Item 2: " + localStorage.getItem("2"));
console.log("Lista Productos: " + localStorage.getItem("listaProductos"));

let prods = JSON.parse(localStorage.getItem("listaProductos"));
console.log(prods);
console.log("Producto: " + prods[2].producto + " - Precio: $" + prods[2].precio);*/





//Ejemplo aplicado
class Producto {
    constructor(obj) {
        this.nombre = obj.producto.toUpperCase();
        this.precio = parseFloat(obj.precio);
    }

    sumaIVA() {
        this.precio = this.precio * 1.21;
    }
}

const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
almacenados.push({id:4, producto:"Pepsi", precio:170});
const productos = [];

console.log(localStorage.getItem("listaProductos"));
console.log(typeof localStorage.getItem("listaProductos"));
console.log(almacenados);
console.log(typeof almacenados);
console.log(productos);

for (const objeto of almacenados) {
    productos.push(new Producto(objeto));
}

console.log(productos);

for (const pepe of productos) {
    pepe.sumaIVA();
}

console.log(productos);