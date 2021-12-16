/*
// Condición verdadera
if (true) {
    console.log("Vas a ver este mensaje!");
}

// Condición false
if (false) {
    console.log("No vas a ver este mensaje!");
}*/



/*let unNumero = 5;

// Comparamos el valor de la variable con 5
if (unNumero == 5) {
    console.log("Vas a ver este mensaje!");
}

// Comparamos el valor de la variable con 6
if (unNumero == 6) {
    console.log("No vas a ver este mensaje!");
}*/



/*let unColor = "Verde";

// Comparamos el valor de la variable con Rojo
if (unColor == "Rojo") {
    console.log("El color es Rojo!");
} else {
    console.log("El color no es Rojo!");
}*/



/*let nombreUsuario = prompt("Ingrese su Nombre de Usuario");

if (nombreUsuario == null) {
    alert("No ingresaste tu Nombre de Usuario!");
} else {
    alert("El Usuario ingresado es: " + nombreUsuario);
}

if (nombreUsuario != null) {
    alert("El Usuario ingresado es: " + nombreUsuario);
} else {
    alert("No ingresaste tu Nombre de Usuario!");
}*/



/*let precio = 100.5;

if (precio < 20) {
    alert("El precio es menor que 20");
} else if (precio < 50) {
    alert("El precio es menor que 50");
} else if (precio < 100) {
    alert("El precio es menor que 100");
} else {
    alert("El precio es mayor a 100");
}*/



/*let esValida = true;
let numero = 5;
let esMayor5 = (numero > 5);

if (esValida) {
    alert("Es Boolean True!");
} else {
    alert("No se cumplió la condición");
}*/





// Operadores Lógicos
let a = 5;
let b = 10;
let c = false;

// A es igual B
if (a == b) {
    console.log("A es igual a B!");
}

// A es estrictamente igual que B
if (a === b) {
    console.log("A es estrictamente igual a B!");
}

// A es distinto de B
if (a != b) {
    console.log("A es distinto de B!");
}

// A es estrictamente distinto de B
if (a !== b) {
    console.log("A es estrictamente distinto de B!");
}

// A es menor o igual que B
if (a <= b) {
    console.log("A es menor o igual que B!");
}

// A es mayor o igual que B
if (a >= b) {
    console.log("A es mayor o igual que B!");
}

if ((a == 10) && (b == 10)) {
    console.log("A y B valen igual a 10!");
}

if (a == 10 || b == 10) {
    console.log("A o B valen igual a 10!");
}

if (!(a >= 5)) {
    console.log("A no es mayor que 5!");
}




/*let nombre = prompt("Cúal es tu Nombre?");
let apellido = prompt("Cúal es tu Apellido?");

if ((nombre == null) && (apellido == null)) {
    alert("Ingrese su Nombre y Apellido!");
} else {
    alert("Su Nombre y Apellido es: " + nombre + " " + apellido);
}*/



/*let nombreIngresado = prompt("Ingrese su Nombre");

if ((nombreIngresado == "ana") || (nombreIngresado == "ANA")) {
    alert("El nombre ingresado es Ana!");
} else {
    alert("El nombre ingresado no es Ana!");
}*/



/*let nombreIngresado = prompt("Ingrese su Nombre");

if ((nombreIngresado != null) && ((nombreIngresado == "ana") || (nombreIngresado == "ANA"))) {
    alert("El nombre ingresado es Ana!");
} else {
    alert("El nombre ingresado no es Ana!");
}

if (((nombreIngresado != null) && (nombreIngresado == "ana")) || (nombreIngresado == "ANA")) {
    alert("El nombre ingresado es Ana!");
} else {
    alert("El nombre ingresado no es Ana!");
}*/