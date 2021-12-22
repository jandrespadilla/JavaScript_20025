function accion() {
    var valor1 = document.getElementById('valor1').value;
    var valor2 = document.getElementById('valor2').value;
    document.getElementById('resultado').innerHTML=valor1+'  '+valor2;
 }

/*
// Ejemplo For #1
for (let i=0; i<10; i++) {
    console.log("El valor de 'i' es: " + i);
}*/

// Ejemplo For #2
/*for (let i=1; i<=10; i++) {
    console.log("El valor de 'i' es: " + i);
}*/



/*
// Ejemplo Tablas
let ingresarNumero = parseInt(prompt("Ingresar Número:"));

for (let i=0; i<=10; i++) {
    let resultado = ingresarNumero * i;
    console.log(ingresarNumero + " X " + i + " = " + resultado);
  
}*/
/*
//Ejemplo Turnos
let ingresarNumero = parseInt(prompt("Ingresar Número:"));
for (let i=1; i<=ingresarNumero; i++) {
    let ingresarNombre = prompt("Ingrese Nombre:");
     
    console.log("Turno Nº: " + i + " - Nombre: " + ingresarNombre);
}*/




/*
// Sentencia Break
for (let i=1; i<=10; i++) {
    console.log("Hola #" + i);

    if (i == 5) {
        console.log("Entré al break!");
        break;
    }
}
*/

/*
var maximo_permitido = 2000;
var calorias = 0;

// Sentencia Break
for (let i=1; i<=10; i++) {
    let pregunta = parseInt(prompt("Indique cuantas calorías consumió en la comida #" + i));
    calorias = calorias + pregunta;
    
    if (calorias > maximo_permitido) {
        break;
    }
}

console.log("El total de calorías que consumiste es: " + calorias);*/


/*

// Sentencia Continue
for (let i=1; i<=10; i++) {
    console.log("Hola #" + i);

    if (i == 5) {
        console.log("Entré al Continue!");
        continue;
    }

    console.log("Chau #" + i);
}*/



/*
// While
let repetir = true;
let i = 0;

while (repetir) {
    console.log("Al infinito ...");
    
    if (i == 5) {
        console.log("Entré al Break!");
        break;
    }

    i++;
}*/




// While con ESC
let entrada = prompt("Ingrese un dato").toUpperCase();

while (entrada != "ESC") {
    alert("El usuario ingresó: " + entrada);

    entrada = prompt("Ingrese otro dato");
}/**/



/*
let numero = 0;

do {
    numero = prompt("Ingresar Número:");
    console.log(numero);
} while (parseInt(numero));*/



/*
let numero = parseInt(prompt("Cual es tu edad?"));

switch(numero) {
    case 10:
        alert("Sos un niño!");
        break;
    case 15:
        alert("Sos un adolescente!");
        break;
    case 25:
        alert("Sos un adulto!");
        break;
    default:
        alert("Sos un viejo!");
        break;
}*/



/*
let nombre = prompt("Ingrese su Nombre:");

while (nombre != "ESC") {
    switch(nombre) {
        case "ANA":
            alert("Hola Ana!");
            break;
        case "JUAN":
            alert("Hola Juan!");
            break;
        default:
            alert("Quién sos?");
            break;
    }

    nombre = prompt("Ingrese un Nombre:");
}*/