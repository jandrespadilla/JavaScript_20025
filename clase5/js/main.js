
/*// Definos unas Variables
let nombre = "Homero";
let edad = 39;
let direccion = "Av. Siempreviva 742";
// Defino un objeto
const persona1 = {nombre:"Homero", edad:40, direccion:"Av. Siempreviva 742"};


console.log(persona1);
console.log("Nombre:" + persona1.nombre);
console.log("Edad:" + persona1.edad);
console.log("Dirección:" + persona1.direccion);*/
/*
// Otra forma de acceder a las propiedades
console.log("Nombre:" + persona1["nombre"]);
console.log("Edad:" + persona1["edad"]);
console.log("Dirección:" + persona1["direccion"]);
console.log("Color:" + persona1["color"]);*/


/*
// Asignando valores en las propiedades de mi objeto
persona1.nombre = "Marge";
persona1["edad"] = 36;
console.log(persona1);
*/


/*
// Constructores
function Persona(var1, var2, var3) {
    this.nombre = var1;
    this.edad = var2;
    this.direccion = var3;
    this.dni = "8.888.888";
}

const persona1 = new Persona(prompt("Ingrese su nombre:"), 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
console.log(persona1);
console.log(persona2);
//persona1.nombre = "Bart";
//persona1.edad = 12;
//console.log(persona1);*/



/*
// Constructor con objeto
function Persona(humano) {
    this.nombre = humano.nombre;
    this.edad = humano.edad;
    this.direccion = humano.calle;
    this.tez = humano.piel;
    this.darNombre = function() {console.log("Mi nombre es: " + this.nombre)};
}

//const persona1 = new Persona({nombre:"Homero", edad:39, calle:"Av. Siempreviva 742"});
let people = {nombre:"Homeros", edad:40, calle:"Av. Siempreviva 742", color:"Amarillo"};
let people2 = {nombre:"Marge", edad:36, calle:"742 Evergreen", piel:"Amarrillo", pelo:"Azul"};
const persona1 = new Persona(people);
const persona2 = new Persona(people2);
console.log(persona1);
*/


/*
// Métodos en Objetos
let cadena = "Coder House";
console.log("Cadena original: " + cadena);
console.log("Longitud: " + cadena.length); //Propiedad
console.log("Todo minúsculas: " + cadena.toLocaleLowerCase()); //Método para pasar todo a minúsculas
console.log("Todo mayúsculas: " + cadena.toUpperCase()); //Método para pasar todo a mayúsculas*/



/*
// Métodos personalizados
function Persona(var1, var2, var3) {
    this.nombre = var1;
    this.edad = var2;
    this.direccion = var3;
    this.hablar = function () { console.log("Hola soy " + this.nombre)};
}

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.descuento = 10;
    this.precioConDescuento = function() { return this.precio - ((this.precio * this.descuento) / 100)};
}

const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
console.log(persona1.nombre);
persona1.hablar();

const producto = new Producto("iPhone", "180000");
console.log("Nombre: " + producto.nombre);
console.log("Precio: " + producto.precio);
console.log("Precio c/Descuento: " + producto.precioConDescuento());*/



/*
// Operador IN y FOR
const persona1 = {nombre:"Homero", edad:40, direccion:"Av. Siempreviva 742"};

console.log("nombre" in persona1);
console.log("edad" in persona1);
console.log("color" in persona1);

for (const prop in persona1) {
    console.log("Propiedad: " + prop + " - Valor: " + persona1[prop]);
}
*/

/*

class Persona {
    constructor (var1, var2, var3) {
        this.nombre = var1;
        this.edad = var2;
        this.direccion = var3;    
    }

    hablar() {
        console.log("Hola soy " + this.nombre);
    }
}

const persona1 = new Persona("Homero", 40, "Av. Siempreviva 742");
console.log(persona1);
persona1.hablar();*/



class Producto {
    constructor (nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = precio;
        this.vendido = false;
    }

    iva() {
        this.precio = this.precio * 1.21;
    }

    vender() {
        this.vendido = true;
    }
}

const producto1 = new Producto("Arroz", 150);
const producto2 = new Producto("Galletitas Toddy", 120);
console.log(producto1);
console.log(producto2);
producto1.iva();
producto1.vender();
console.log(producto1);
console.log(producto2);