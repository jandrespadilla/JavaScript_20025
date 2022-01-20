let telefonoSelect  = document.getElementById("telefono");
telefonoSelect.onchange = () => {
        let companiasMovilesSelect  = document.getElementById("companiasMovilesDiv");
        let companiasFijosSelect  = document.getElementById("companiasFijosDiv");
        switch(telefonoSelect.value) {
            case '-1':
                companiasMovilesSelect.classList.add("visually-hidden");
                companiasFijosSelect.classList.add("visually-hidden");
                break;
            case 'Celular':
                companiasMovilesSelect.classList.remove("visually-hidden");
                companiasFijosSelect.classList.add("visually-hidden");
                break;
            case 'Teléfono':
                companiasFijosSelect.classList.remove("visually-hidden");
                companiasMovilesSelect.classList.add("visually-hidden");
                break; 
            default:
                companiasMovilesSelect.classList.add("visually-hidden");
                companiasFijosSelect.classList.add("visually-hidden");
                break;
        }


};


let formularioContacto = document.getElementById("contacto");
formularioContacto.addEventListener("submit", validarFormularioContacto);
function validarFormularioContacto(e) {
    e.preventDefault();
    let nombre  = document.getElementById("nombre");
    let email  = document.getElementById("email");
    let telefono  = document.getElementById("telefono");
   
    
    let numeroTelefono  = document.getElementById("numeroTelefono");
    let provincia  = document.getElementById("provincia");
    let consulta  = document.getElementById("consulta");
    let nombreError  = document.getElementById("nombreError");
    let emailError  = document.getElementById("emailError");
    let telefonoError = document.getElementById("telefonoError");
   
    let numeroTelefonoError  = document.getElementById("numeroTelefonoError");
    let provinciaError  = document.getElementById("provinciaError");
    let consultaError = document.getElementById("consultaError");

    if (nombre.value=='') {
        nombreError.innerHTML='Debe ingresar un nombre';
        nombreError.classList.add('bg-danger');
        nombreError.classList.add('text-white');
    } else {
        nombreError.classList.add('visually-hidden');
    }

    if (email.value=='') {
        emailError.innerHTML='Debe ingresar un Email';
        emailError.classList.add('bg-danger');
        emailError.classList.add('text-white');
    } else {
        emailError.classList.add('visually-hidden');
    }  

    if (telefono.value=='-1') {
        telefonoError.innerHTML='Debe seleccionar un tipo de telefono';
        telefonoError.classList.add('bg-danger');
        telefonoError.classList.add('text-white');
    } else {  
        telefonoError.classList.add('visually-hidden');
    } 

    if (numeroTelefono.value=='') {
        numeroTelefonoError.innerHTML='Debe ingresar un numero de telefono';
        numeroTelefonoError.classList.add('bg-danger');
        numeroTelefonoError.classList.add('text-white');
    } else {
        numeroTelefonoError.classList.add('visually-hidden');
    } 
    
    if (provincia.value=='-1') {
        provinciaError.innerHTML='Debe seleccionar una provincia';
        provinciaError.classList.add('bg-danger');
        provinciaError.classList.add('text-white');
    } else {
        provinciaError.classList.add('visually-hidden');
    }   
    
    if (consulta.value=='') {
        consultaError.innerHTML='Debe ingresar una consulta';
        consultaError.classList.add('bg-danger');
        consultaError.classList.add('text-white');
    } else {
        consultaError.classList.add('visually-hidden');
    } 
   
}
