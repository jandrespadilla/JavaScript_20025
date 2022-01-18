// Definir Eventos - Opción 1
/*let boton = document.getElementById("btnPrincipal");
boton.addEventListener("click", respuestaClick);

function respuestaClick() {
    console.log("Respuesta Evento #1!");
  //  saludar('hOLA');
}
function saludar(saludo) {
        alert(saludo);
}
*/
/*
// Definir Eventos - Opción 2
let boton = document.getElementById("btnPrincipal");
let email = document.getElementById("email");
boton.onclick = () => {
    console.log("Respuesta Evento #2!");
    respuestaClick();
};

email.onclick = () => {
    var contenido = "<p class='text-white bg-black p-3'>Hiciste click sobre el campo Email!</p>";
    document.getElementById("resultado").innerHTML = contenido;
};

*/
/*
// Eventos del Mouse
let boton = document.getElementById("btnPrincipal");
//boton.onclick = () => {console.log("Evento Click!")};
//boton.onmousemove = () => {console.log("Evento Move!")};

boton.addEventListener("click", eventoClick);
boton.addEventListener("mouseover", eventoOnMouseOver);
boton.addEventListener("mouseout", eventoOnMouseOut);

function eventoClick() {
    console.log("Evento Click! (Desde la función)");
}

function eventoOnMouseOver() {
    console.log("Evento On Mouse Over! (Desde la función)");
}

function eventoOnMouseOut() {
    console.log("Evento On Mouse Out! (Desde la función)");
}  

*/
/*
// Eventos del Teclado
let nombre  = document.getElementById("nombre");
let email  = document.getElementById("email");
nombre.onkeyup = () => {console.log("Evento KeyUp!")};
email.onkeydown = (value) => {console.log("Evento KeyDown!")};
nombre.addEventListener("keyup", eventoKeyUp);
email.addEventListener("keydown", eventoKeyDown);

function eventoKeyUp() {
    console.log("Evento Key Up! (Desde la función)");
}

function eventoKeyDown() {
    console.log("Evento Key Down! (Desde la función)");
}

*/
 /*
// Eventos Change
let nombre = document.getElementById("nombre");
let telefono = document.getElementById("telefono");
//telefono.onchange = () => {console.log("valor1")};
let provincia = document.getElementById("provincia");

nombre.onchange = () => {
    let nombre = document.getElementById("nombre").value;
    var contenido = "<p class='text-white bg-black p-3'>" + nombre + "</p>";
    document.getElementById("resultado").innerHTML = contenido;
}

telefono.onchange = () => {
    let telefono_valor = telefono.value;
    console.log("El valor es: " + telefono_valor);
};

provincia.addEventListener("change", obtenerLocalidades);

function obtenerLocalidades() {
    var provincia_seleccionada = document.getElementById("provincia").value;

    if (provincia_seleccionada == "Buenos Aires") {
        var localidades = ["San Miguel", "Hurlingham", "Moron", "San Martín"];
    } else if (provincia_seleccionada == "Catamarca") {
        var localidades = ["San Miguel2", "Hurlingham2", "Moron2", "San Martín2"];
    } else if (provincia_seleccionada == "La Rioja") {
        var localidades = ["San Miguel3", "Hurlingham3", "Moron3", "San Martín3"];
    } else if (provincia_seleccionada == "Santa Fé") {
        var localidades = ["San Miguel4", "Hurlingham4", "Moron4", "San Martín4"];
    }

    var contenido = "<h3>Localidades:</h3>";
    contenido += "<ul>";

    for (let localidad of localidades) {
        contenido += "<li>" + localidad + "</li>";
    }

    contenido += "</ul>";
    document.getElementById("resultado").innerHTML = contenido;
} 

*/
// Evento submit
let miFormulario = document.getElementById("form1");
miFormulario.addEventListener("submit", validarFormulario);


// Formulario usando Event
function validarFormulario(e) {
    e.preventDefault();
    let formulario = e.target;
    //Obtengo el valor del primero hijo <input type="text">
    console.log("Valor 1: " + formulario.children[0].value); 
    //Obtengo el valor del segundo hijo <input type="number"> 
    console.log("Valor 2: " + formulario.children[1].value);
}


//let boton = document.getElementById("btnPrincipal");
//boton.addEventListener("click", validarFormulario);
/*
function validarFormulario() {
    //e.preventDefault(); // Impide que se envíe el Formulario
    //console.log("Formulario Enviado!");
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var provincia = document.getElementById("provincia").value;
    var consulta = document.getElementById("consulta").value;

    if (nombre == "") {
        alert("Ingrese un Nombre en el Campo Nombre!");
        return false;
    }

    if (email == "") {
        alert("Ingrese un email en el Campo Email!");
        return false;
    }

    var contenido = "Nombre: <strong>" + nombre + "</strong><br>";
    contenido += "Email: <strong>" + email + "</strong><br>";
    contenido += "Teléfono: <strong>" + telefono + "</strong><br>";
    contenido += "Provincia: <strong>" + provincia + "</strong><br>";
    contenido += "Consulta: <strong>" + consulta + "</strong><br>";
    document.getElementById("resultado").innerHTML = contenido;
}*/