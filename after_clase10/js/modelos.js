const modelos = [{id:1, nombre:"Like 1.6", imagen:"imagen_1654.png", descripcion:["Llantas de 15” de acero c/ embellecedores", "Pantalla con comandos 5”", "Faros delanteros con DRL incluidos", "Retrovisores eléctricos"], precio:2595800},
 {id:2, nombre:"Active 1.6", imagen:"imagen_1656.png", descripcion:["Llantas de 16” de acero c/ embellecedores", "Pantalla con comandos 5”", "Faros delanteros con DRL incluidos", "Retrovisores eléctricos"], precio:2809900},
 {id:3, nombre:"Active Triptonic 1.6", imagen:"imagen_1663.png", descripcion:["Llantas de 17” de acero c/ embellecedores", "Pantalla con comandos 5”", "Faros delanteros con DRL incluidos", "Retrovisores eléctricos"], precio:3028000},
 {id:4, nombre:"Allure 1.6", imagen:"imagen_1665.png", descripcion:["Llantas de 18” de acero c/ embellecedores", "Pantalla con comandos 5”", "Faros delanteros con DRL incluidos", "Retrovisores eléctricos"], precio:3046700},
 {id:5, nombre:"Allure Triptonic 1.6", imagen:"imagen_1668.png", descripcion:["Llantas de 19” de acero c/ embellecedores", "Pantalla con comandos 5”", "Faros delanteros con DRL incluidos", "Retrovisores eléctricos"], precio:3046700},
 {id:6, nombre:"Feline Triptonic 1.6", imagen:"imagen_1675.png", descripcion:["Llantas de 20” de acero c/ embellecedores", "Pantalla con comandos 5”", "Faros delanteros con DRL incluidos", "Retrovisores eléctricos"], precio:3046700},
 {id:7, nombre:"GT Line Triptonic", imagen:"imagen_1652.png", descripcion:["Llantas de 21” de acero c/ embellecedores", "Pantalla con comandos 5”", "Faros delanteros con DRL incluidos", "Retrovisores eléctricos"], precio:4677755},
 {id:8, nombre:"GT Triptonic", imagen:"imagen_1704.png", descripcion:["Llantas de 22” de acero c/ embellecedores", "Pantalla con comandos 5”", "Faros delanteros con DRL incluidos", "Retrovisores eléctricos"], precio:4685673}];

/*function cargarModelos(modelos) {
    let contenido = "";
    let i = 1;
    
    for (let modelo of modelos) {
        contenido += "<div class='col-4 py-3'>";
        contenido += "<div class='card'>";
        contenido += "<div class='p-3'><h5 id='modelo_auto" + i + "' class='text-primary fw-bold'>" + modelo.nombre.toUpperCase() + "</h5></div>";
        //contenido += "<img id='modelo_imagen" + i + "' src='images/" + modelo.imagen + "' class='card-img-top' alt='" + modelo.nombre + "' onclick=\"informarPrecio('" + modelo.nombre + "', '" + modelo.precio + "');\">";
        contenido += "<img id='modelo_imagen" + i + "' src='images/" + modelo.imagen + "' class='card-img-top' alt='" + modelo.nombre + "' data-bs-container='body' data-bs-toggle='popover' data-bs-placement='top' data-bs-content='Nombre: " + modelo.nombre + " - Precio: " + modelo.precio + "'>";

        // Agrego botón de descripción
        contenido += "<div class='p-3'><button class='btn btn-primary' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + i + "' aria-expanded='false' aria-controls='collapseExample'>Descripción</button></div>";
        contenido += "<div class='collapse' id='collapse" + i + "'>";
        contenido += "<div class='card card-body'>";
        contenido += "<ul>";

        for (let descrip of modelo.descripcion) {
            contenido += "<li>" + descrip + "</li>";
        }
        
        contenido += "</ul>";
        contenido += "</div>";
        contenido += "</div>";

        contenido += "<div class='card-body'>";
        contenido += "<div class='row'>";
        contenido += "<div class='col'><p class='text-primary text-uppercase'>Precio contado</p></div>";
        contenido += "<div class='col text-end'><p id='modelo_precio" + i + "' class='text-primary fw-bold'><strong>$" + modelo.precio + "</strong></p></div>";
        contenido += "</div>";
        contenido += "</div>";
        contenido += "</div>";
        contenido += "</div>";
        i++;
    }

    document.getElementById("modelos").innerHTML = contenido;
} */


function cargarModelos2() {
    let modelos = cargarModelosLocal();
    let div_modelos = document.getElementById("modelos");
    let modelo_cliente = document.getElementById("modelo_cliente");
    
    for (let modelo of modelos) {
        let columna = document.createElement("div");
        columna.className = "col-4 py-3";
        let encabezado = document.createElement("h3");
        encabezado.className = "text-center text-white bg-dark p-1";
        encabezado.innerHTML = modelo.nombre;
        let card = document.createElement("div");
        card.className = "card";
        let imagen = document.createElement("img");
        imagen.className = "card-img-top";
        imagen.src = "images/" + modelo.imagen;
        imagen.onclick = () => {
            informarPrecio(modelo.nombre, modelo.precio);
        }
        let card_body = document.createElement("div");
        card_body.className = "card-body";
        let precio = document.createElement("p");
        precio.className = "text-center text-white bg-dark p-1";
        precio.innerHTML = "$" + modelo.precio;
        let parrafo = document.createElement("p");
        parrafo.className = "card-text";
        let lista = document.createElement("ul");
        lista.className = "list-group list-group-flush";

        for (let descrip of modelo.descripcion) {
            let item = document.createElement("li");
            item.className = "list-group-item";
            item.innerHTML = descrip;
            lista.appendChild(item);
        }

        let boton = document.createElement("button");
        boton.className = "btn btn-primary";
        boton.innerHTML = "Agregar (+)";
        boton.onclick = () => {
            agregarAlCarrito(modelo.id);
        }

        card_body.appendChild(precio);
        parrafo.appendChild(lista);
        card_body.appendChild(parrafo);
        card_body.appendChild(boton);
        card.appendChild(imagen);
        card.appendChild(card_body);
        columna.appendChild(encabezado);
        columna.appendChild(card);
        div_modelos.appendChild(columna);

        //Creo un option
        let modelo_option = document.createElement("option");
        modelo_option.value = modelo.nombre;
        modelo_option.innerHTML = modelo.nombre;
        modelo_cliente.appendChild(modelo_option);
    }
}

function informarPrecio(nombre, precio) {
    let texto = `<h3>Modelo Seleccionado:</h3>
    <p>Nombre: <strong>${nombre}</strong><br>
    Precio: <strong>${precio}</strong></p>`;
    document.getElementById("resultado").innerHTML = `<div class='text-white bg-dark p-3'>${texto}</div>`;
}

function guardarModelosLocal(modelos) {
    console.log("Se guardo en LocalStorage");
    localStorage.setItem("modelos", JSON.stringify(modelos));
}

function cargarModelosLocal() {
    console.log("Se cargó la LocalStorage");
    return JSON.parse(localStorage.getItem("modelos"));
}

function actualizarContadorCarrito() {
    let total = 0;

    if (localStorage.getItem("total_carrito")) {
        total = localStorage.getItem("total_carrito");
    }

    let contador_carrito = document.getElementById("datos_carrito");
    contador_carrito.innerHTML = "<a href='carrito.html'><i class='bi bi-cart'></i> " + total + " Producto(s)</a>";
}

function buscarProducto(id) {
    let modelos = cargarModelosLocal();
    return modelos.find(x => x.id == id);
}

function cargarCarrito() {
    if (localStorage.getItem("carrito")) {
        return JSON.parse(localStorage.getItem("carrito"));
    }

    return [];
}

function agregarAlCarrito(id) {
    let modelo = buscarProducto(id);
    let modelos = cargarCarrito();
    modelos.push(modelo);
    localStorage.setItem("carrito", JSON.stringify(modelos));
    localStorage.setItem("total_carrito", modelos.length);
    actualizarContadorCarrito();
}

function eliminarCarrito() {
    localStorage.removeItem("carrito");
    localStorage.removeItem("total_carrito");
    console.log("Se elimino el carrito");
}

document.getElementById("eliminar_carrito").addEventListener("click", eliminarCarrito);