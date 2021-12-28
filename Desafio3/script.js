
function sumarFantastico() {
    alert('Vamos a sumarle a un numero X el numero Y por N cantidad de veces');
    let x = parseInt(prompt('Ingrese el valor a X'));
    let y = parseInt(prompt('Ingrese el valor a Y'));
    let n = parseInt(prompt('Ingrese el valor a N'));
    for (let index = 1; index < n; index++) {
        if (index == 1){
            console.log('El valor de X "'+x+'"  es el valor inicial');
            x += y;        
            console.log('El nuevo valor de X es '+x+' cuando le sumamos '+index+' ves el numero '+y);            
        }else{
            x += y;
            console.log('El nuevo valor de X es '+x+' cuando le sumamos '+index+' veces el numero '+y);
        }        
    }
 }
function redactarcCuento() {
    alert('Vamos a redactar un cuento acerca de tu vida');
    let texto=''
    let ingreso='nombre'
    while (texto!='ESC') {

        switch (ingreso) {
            case "nombre":
                let  nombre = prompt('Ingresa tu nombre');
                cuento = 'Mi nombre es '+ nombre ;
                ingreso='apellido';
                texto=nombre.toUpperCase;
            case "apellido":
                let apellido = prompt('Ingresa tu apellido');
                 cuento = cuento+' de apellido '+apellido
                ingreso='profesion'; 
                texto=apellido.toUpperCase; 
            case "profesion":
                let profesion = prompt('Ingresa tu profesion');   
                cuento = cuento+', soy '+profesion+' (aunque hago como si trabajo..).';
                ingreso='nacimiento';
                texto=profesion.toUpperCase;                
            case "nacimiento":
                let fecha = prompt('Ingresa tu fecha de nacimiento');
                 cuento = cuento+' Naci el '+fecha+' en un pueblito en el interior del amazonas';
                ingreso='mascota';
                texto=fecha.toUpperCase; 
    
            case "mascota":
                let mascota = prompt('Ingresa el nombre de tu mascota');  
                cuento = cuento+' Mi mascota '+mascota+' es un cocodrilo que alimento con turistas perdidos.'
                ingreso='cuento';
                texto=mascota.toUpperCase;    
            case "cuento":
                texto='ESC';
                break;
        }

    }
    console.log(cuento);
 }
function saludometro() {
    let numero = parseInt(prompt('Ingrese cuantas veces quieres que te saluden.'));
    for (let index = 1; index <= numero; index++) {
         console.log('Saludo '+index+' Hola.');
        if (index==numero) {
            console.log('Adios.');
        }
    }
}


