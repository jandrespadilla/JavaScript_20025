class DatosFormulario {
    constructor(datos_formulario) {
        this.nombre = datos_formulario[0];
        this.email = datos_formulario[1];
        this.modelo = datos_formulario[2];
    }
}

// Envia los datos de mi Formulario y los guarda en un LocalStorage
function enviarDatos() {
    var nombre = document.getElementById("nombre_cliente").value;
    var email = document.getElementById("email_cliente").value;
    var modelo = document.getElementById("modelo_cliente").value;

    if ((nombre == "") || (nombre.length < 3)) {
        let mensaje = "Error! El campo Nombre está vacío!";
        alert(mensaje);
        console.log(mensaje);
        document.getElementById("resultado").innerHTML = "<p class='text-white bg-danger p-3'>" + mensaje + "</p>";
        return false;
    }

    if ((email == "") || (!email.includes("@"))) {
        let mensaje = "Error! El campo Email está vacío!";
        alert(mensaje);
        console.log(mensaje);
        document.getElementById("resultado").innerHTML = "<p class='text-white bg-danger p-3'>" + mensaje + "</p>";
        return false;
    }

    localStorage.setItem("datos_formulario", JSON.stringify([nombre, email, modelo]));
    document.getElementById("resultado").innerHTML = "<p class='text-white bg-black p-3'>Los datos se enviaron correctamente!</p>";
}

function cargarDatos() {
    var datos = JSON.parse(localStorage.getItem("datos_formulario"));
    var datos_formulario = new DatosFormulario(datos);
    document.getElementById("nombre_cliente").value = datos_formulario.nombre;
    document.getElementById("email_cliente").value = datos_formulario.email;
    document.getElementById("modelo_cliente").value = datos_formulario.modelo;
    document.getElementById("resultado").innerHTML = "<p class='text-white bg-black p-3'>Los datos se cargaron correctamente!</p>";
}

function borrarDatos() {
    document.getElementById("nombre_cliente").value = "";
    document.getElementById("email_cliente").value = "";
    localStorage.clear();
    document.getElementById("resultado").innerHTML = "<p class='text-white bg-black p-3'>Los datos se eliminaron correctamente!</p>";
}