
function mayorMil() {
    let numero = parseInt(prompt('Verifique si el numero es mayor a mil'));
    if (numero>1000) {
        alert('El numero '+numero+' es mayor a 1000');
    }else if (numero<1000)  {
        alert('El numero '+numero+' es menor a 1000');
    } else {
        alert('El numero '+numero+' es igual a 1000');
    }
 }
function verificarTexto() {
    let nombre = prompt('Ingrese su nombre');
    let texto = prompt('Ingrese un texto de saludo').toUpperCase();
    if (texto=='HOLA') {
        console.log('Hola '+nombre+' ¿Como estas?');
    } else if (texto=='CHAU') {
        console.log('Chau '+nombre+' que te vaya bien.');
    }
 }
function evaluarNumero() {
    let mayor = parseInt(prompt('Ingrese un rango superior'));
    let menor = parseInt(prompt('Ingrese un rango inferior'));
    if (mayor<menor) {
        alert('No puede ingresar un rango superior menor al rango inferior.');
        evaluarNumero();
    }
    let numero = parseInt(prompt('Ingrese un numero a comparar'));
    if (numero<=mayor) {
        if (numero>=menor) {
            console.log('El numero es menor o igual a '+mayor+ ' y mayor o igual a '+menor);
        }else{
            console.log('El numero es menor o igual a '+mayor+ ' y menor a '+menor);
        }
    }else{
        if (numero<menor) {
            console.log('El numero es mayor a '+menor+ ' y menor a '+mayor);
        }else{
            console.log('El numero es mayor a '+menor+ ' y mayor o igual a '+mayor);
        }        
    }
}


