class Producto {
    constructor (var1, var2, var3) {
        this.id = parseInt(var1);
        this.nombre = var2;
        this.precio = parseFloat(var3);
        this.descuento = 10;
        this.iva = 21;
    }

    aplicarDescuento() {
        this.precio = this.precio - ((this.precio * this.descuento) / 100);
    }

    aplicarIVA() {
        this.precio = this.precio + ((this.precio * this.iva) / 100);
    }
}

class Servicio {
    constructor (var1) {
        this.id = parseInt(var1.id);
        this.nombre = var1.nombre;
        this.precio = parseFloat(var1.precio);
        this.descuento = 20;
        this.iva = 21;
    }

    aplicarDescuento() {
        this.precio = this.precio - ((this.precio * this.descuento) / 100);
    }

    aplicarIVA() {
        this.precio = this.precio + ((this.precio * this.iva) / 100);
    }
}

/*
let id = prompt("Ingrese ID del producto:");
let nombre = prompt("Ingrese Nombre del producto:");
let precio = prompt("Ingrese Precio del producto:");
const producto1 = new Producto(id, nombre, precio);
console.log(producto1);
producto1.aplicarIVA();
console.log(producto1);
producto1.aplicarDescuento();
console.log("Nombre: " + producto1.nombre + " - Precio: " + producto1.precio);*/
/*
//Creo los Servicios
const servicio1 = new Servicio({id:1, nombre:"Corte de Pelo", precio:1500, descripcion:"Corte con tijera"});
const servicio2 = new Servicio({id:2, nombre:"Tintura", precio:3500});


//Solicito la cantidad de Productos a agregar
let cant = parseInt(prompt("¿Cúantos productos querés agregar?"));
let arrayProductos = []; //Array de Productos
let arrayServicios = [];

//Agrego los Servicios
arrayServicios.push(servicio1);
arrayServicios.push(servicio2);
/*
for (let i=0; i<cant; i++) {
    let id = i + 1;
    let nombre = prompt("Ingrese Nombre del Producto:");
    let precio = prompt("Ingrese Precio del Producto:");
    let producto = new Producto(id, nombre, precio);
    arrayProductos.push(producto);
}*/
/*
for (let i=0; i<cant; i++) {
    let id1 = arrayServicios.length + 1;
    let nombre1 = prompt("Ingrese Nombre del Servicio:");
    let precio1 = prompt("Ingrese Precio del Servicio:");
    let objeto = {id:id1, nombre:nombre1, precio:precio1};
    let servicio = new Servicio(objeto);
    arrayServicios.push(servicio);
}
/*
console.log("Cantidad de Productos: " + arrayProductos.length);

for (let producto of arrayProductos) {
    producto.aplicarDescuento();
    alert("Producto - ID: " + producto.id + ", Nombre: " + producto.nombre + ", Precio: $" + producto.precio);
}*/
/*
console.log("Cantidad de Servicios: " + arrayServicios.length);

for (let servicio of arrayServicios) {
    servicio.aplicarDescuento();
    alert("Servicio - ID: " + servicio.id + ", Nombre: " + servicio.nombre + ", Precio: $" + servicio.precio);
}

//Ingreso el Nombre del Servicio a Buscar
let servicio_buscado = prompt("Ingrese el Servicio a buscar:").toLowerCase();
let servicio_encontrado = [];

for (let servicio of arrayServicios) {
    let nombre_servicio = servicio.nombre.toLowerCase();

    if (nombre_servicio.includes(servicio_buscado)) {
        servicio_encontrado.push(servicio);
    }
}

//Filtrar el Nombre del Servicio buscado
//let servicio_resultado = arrayServicios.filter(x => x.nombre.includes(servicio_buscado));

//Muestro los Servicios encontrados
for (let servicio of servicio_encontrado) {
    alert("Servicio: " + servicio.nombre + " - Precio: $" + servicio.precio);
}


/*for (let i = 0; i<arrayProductos.length; i++) {
    alert("2- ID: " + arrayProductos[i].id + ", Nombre: " + arrayProductos[i].nombre + ", Precio: $" + arrayProductos[i].precio);
}*/

/*
let i = 0;
while (i<arrayProductos.length) {
    arrayProductos[i].aplicarDescuento();
    alert("3- ID: " + arrayProductos[i].id + ", Nombre: " + arrayProductos[i].nombre + ", Precio: $" + arrayProductos[i].precio);
    i++;
}*/


const prod1 = new Producto(1, "Coca Cola", 180);
const prod2 = new Producto(2, "Pan", 90);
const prod3 = new Producto(3, "Helado", 350);
const arrayProductos2 = [];
arrayProductos2.push(prod1);
arrayProductos2.push(prod2);
arrayProductos2.push(prod3);
const arrayProductos3 = arrayProductos2;
const arrayProductos4 = [];
let max = 0;

for (let producto of arrayProductos2) {
    if (max == 0) {
        min = producto.precio;
    }

    for (let producto2 of arrayProductos3) {
        if (producto2.precio < min) {
            min = producto2.precio;
            arrayProductos4.push(producto2);
        }
    }
}

let array2 = [20, 10, 50];
console.log(array2);
console.log(array2.sort());

console.log("Valor: " + Math.floor(Math.random() * 11));
console.log(arrayProductos4);