const modelos = [{nombre:"Like 1.6", imagen:"imagen_1654.png", precio:"2.875.400"},
                 {nombre:"Active 1.6", imagen:"imagen_1656.png", precio:"3.112.500"},
                 {nombre:"Active Triptonic 1.6", imagen:"imagen_1663.png", precio:"3.314.500"},
                 {nombre:"Allure 1.6", imagen:"imagen_1665.png", precio:"3.314.500"}, 
                 {nombre:"Allure Triptonic 1.6", imagen:"imagen_1668.png", precio:"3.314.500"},
                 {nombre:"Feline Triptonic 1.6", imagen:"imagen_1675.png", precio:"3.314.500"}, 
                 {nombre:"GT Line Triptonic", imagen:"imagen_1652.png", precio:"5.084.536"},
                 {nombre:"GT Triptonic", imagen:"imagen_1649.png", precio:"5.092.455"}]; 
//let modelos = [{nombre:"Fiat Palio", imagen:"", precio: "1.000.000"}];

class Auto {
    constructor (modelo) {
        this.nombre = modelo.nombre;
        this.imagen = modelo.imagen;
        this.importe = modelo.precio;
    }

    aplicarDescuento() {
        this.precio = this.precio * 0.90;
    }
}

function guardarModelos(modelos) {
    localStorage.setItem("modelos", JSON.stringify(modelos));
    console.log("Los modelos se guardaron correctamente!");
}

function cargarModelos() {
    console.log("Los modelos se cargaron correctamente!");
    return JSON.parse(localStorage.getItem("modelos"));
}

function borrarModelos() {
    localStorage.removeItem("modelos");
}

//borrarModelos();
//guardarModelos(modelos);
//let modelos_cargados = cargarModelos();
//console.log(modelos_cargados);


// Método #1 de actualizar contenidos
let contenido = "";

for (let modelo_cargado of modelos) {
//for (let modelo_cargado of modelos_cargados) {
    let auto = new Auto(modelo_cargado);
    //auto.aplicarDescuento();
    contenido += "<div class='col-md-4 py-3'>";
    contenido += "<div class='card'>";
    contenido += "<h5 class='card-title p-3 text-primary text-uppercase fw-bold'>" + auto.nombre + "</h5>";
    contenido += "<img src='images/" + auto.imagen + "' class='card-img-top' alt='" + auto.nombre + "'>";
    contenido += "<div class='card-body'>";
    contenido += "<div class='row mb-2'>";
    contenido += "<div class='col-md-6 text-primary text-uppercase fw-bold'><span>PRECIO CONTADO</span></div>";
    contenido += "<div class='col-md-6 text-primary text-uppercase fw-bold text-end'><span>$" + auto.importe + "</span></div>";
    contenido += "</div>";
    contenido += "<div class='p-3 mb-2 bg-light text-dark text-center'>Dejanos tus datos para acceder a una oferta comercial y te contactaremos a la brevedad.</div>"
    contenido += "<div class='d-grid gap-2 mb-2'><a href='#' class='btn btn-primary'>Comprar</a></div>";
    contenido += "</div>";
    contenido += "</div>";
    contenido += "</div>";
}

let pagina_modelos = document.getElementById("modelos");
pagina_modelos.innerHTML = contenido;



// Método #2 de actualizar contenidos
/* let pagina_modelos = document.getElementById("modelos");

for (let modelo_cargado of modelos_cargados) {
    let auto = new Auto(modelo_cargado);
    let contenido = document.createElement("div");
    contenido.className = "col-md-4 py-3";
    contenido.innerHTML = `<div class='card'>
    <h5 class='card-title p-3 text-primary text-uppercase fw-bold'>${auto.nombre}</h5>
    <img src='images/${auto.imagen}' class='card-img-top' alt='${auto.nombre}'>
    <div class='card-body'>
    <div class='row mb-2'>
    <div class='col-md-6 text-primary text-uppercase fw-bold'><span>PRECIO CONTADO</span></div>
    <div class='col-md-6 text-primary text-uppercase fw-bold text-end'><span>$${auto.precio}</span></div>
    </div>
    <div class='p-3 mb-2 bg-light text-dark text-center'>Dejanos tus datos para acceder a una oferta comercial y te contactaremos a la brevedad.</div>
    <div class='d-grid gap-2 mb-2'><a href='#' class='btn btn-primary'>Comprar</a></div>
    </div>
    </div>`;
    pagina_modelos.appendChild(contenido);
} */