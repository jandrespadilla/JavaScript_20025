// Definimos Arrays
/*const arrayA = [];
const arrayB = [1, 2, 3, 5, 10.4];
const arrayC = ["C1", "C2", "C3"];
const arrayD = [true, false, true, false];
const arrayE = [1, true, "C4"];
console.log(arrayA);
console.log(arrayB);
console.log(arrayC);
console.log(arrayD);
console.log(arrayE);*/


/*
// Acceso al Array
const numeros = [1, 2, 3, 4, 5];
let resultado1 = numeros[0] + numeros[2];
let resultado2 = numeros[1] + numeros[4];
let resultado3 = numeros[1] + numeros[1];
console.log(resultado1); //4
console.log(resultado2); //7
console.log(resultado3); //4
const personas = ["Wanda Nara", "China Suarez", "Mauro Icardi"];
let nueva_pareja = personas[0] + " y " + personas[2];
console.log(nueva_pareja);*/



// Recorrido del Array
const numeros = [1, 2, 3, 4, 5];
for (let i=0; i<5; i++) {
    console.log("Número: " + numeros[i]);
}/**/



// Métodos y Propiedades de los Arrays
/*const miArray = ["marca", 3, "Palabra"];
console.log("Longitud: " + miArray.length);
console.log("Convertir a String: " + miArray.toString().toLocaleUpperCase());*/

/*var var1 = miArray.toString();
var var2 = var1.toLocaleUpperCase();
console.log("Var1: " + var1);*/

/*miArray.push("otro elemento"); // Agrego otro elemento
var nombre = prompt("Ingrese su nombre");
miArray.push(nombre);
console.log("Longitud: " + miArray.length);
console.log("Método Join: " + miArray.join("."));*/

/*const otroArray = ["ford", 45];
//const nuevoArray = miArray.concat(otroArray);
const nuevoArray = otroArray.concat(miArray);
console.log(nuevoArray);*/



/*const nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];
const masculinos = nombres.slice(1, 3);
console.log(nombres);
console.log(masculinos);*/
/*
const listaNombres = [];
var cantidad = 5;

do {
    let entrada = prompt("Ingresar nombre");
    listaNombres.push(entrada.toUpperCase());
    console.log(listaNombres);
} while (listaNombres.length != cantidad) {
    let entrada2 = prompt("Ingresar nombre");
    listaNombres.push(entrada2.toUpperCase());
}*/


/*
console.log(listaNombres);
var nombre = listaNombres.pop();
console.log("El nombre eliminado: " + nombre);
console.log(listaNombres);*/



/*const objeto1 = {id:1, producto:"Arroz"};
console.log(objeto1);
const array = [objeto1, {id:2, producto:"Harina"}];
console.log(array);
array.push({id:3,producto:prompt("Ingrese producto")});
console.log(array);*/

/*
const productos = [{id:1, nombre:"Arroz"}, {id:2, nombre:"Harina", precio:120}, {id:3, nombre:"Leche"}];

for (const producto of productos) {
    console.log("ID: " + producto.id + " - Producto: " + producto.nombre);
}

/*for (let beto of productos) {
    console.log("ID: " + beto.id + " - Producto: " + beto.nombre + " - Precio: " + beto.precio);
}*/


/*
let miFuncion = (a,b) => a+b;
let forma = "rendona";
let tamano = 1;
console.log(typeof miFuncion);
console.log(typeof forma);
console.log(typeof tamano);
let nombre = prompt("Ingrese nombre");
console.log(typeof nombre);
if (typeof nombre == "string") {
    alert("El nombre ingresado es String!");
} else {
    alert("El nombre no es ingresado es String!");
}*/


/*
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
        this.iva = 1.21;
        this.precio_iva = this.precio * this.iva;
    }

    sumaIva() {
        this.precio = this.precio * this.iva;
    }
}*/

/*
const productos = [];
productos.push(new Producto("Arroz", 120));
productos.push(new Producto("Harina", 80));
productos.push(new Producto("Leche", 100));

for (const producto of productos) {
    console.log(producto.sumaIva());
}

console.log(productos);
console.log(productos[1].nombre + " " + productos[1].precio_iva);*/

/*
const numeros = [1, 2, 3, 4, 5];
//const encontrado = numeros.find(elementos => elementos == 4);
const encontrado = numeros.filter(elementos => elementos <= 5);
const porDos = numeros.map(elemento => elemento * 2);
const masCien = numeros.map(elemento => elemento + 100);
console.log(numeros);
console.log(porDos);
console.log(masCien);*/

/*
const nombres = ["Ana", "Ana María", "Wanda", "Mauro"];
//const encontrado = nombres.find(nombres => nombres == "Wanda");
//const encontrado2 = nombres.find(nombres => nombres == 123);
//const encontrado = nombres.filter(nombres => nombres == "Ana");
const encontrado = nombres.filter(nombres => nombres.includes("Ana"));
const lista_nombres = nombres.map(nombres => nombres.length);
console.log(nombres);
console.log(encontrado);
//console.log(encontrado2);*/
//console.log(lista_nombres);


/*
const productos = [{id:1, producto:"Arroz", precio: 125}, {id:2, producto:"Harina", precio: 150}, {id:3, producto:"Coca Cola", precio: 180}];

const buscarPan = productos.find(productos => productos.id == 3);
console.log(buscarPan);

const baratos = productos.filter(productos => productos.precio < 150);
console.log(baratos);

const aumentos = productos.map(productos => productos.precio += 30);
console.log(aumentos);*/