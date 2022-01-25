const modelos = [{nombre:"Like 1.6", imagen:"imagen_1654.png", descripcion:["Llantas de 15” de acero c/ embellecedores", "Pantalla con comandos 5”", "Faros delanteros con DRL incluidos", "Retrovisores eléctricos"], precio:"2.595.800"},
 {nombre:"Active 1.6", imagen:"imagen_1656.png", descripcion:["Llantas de 16” de acero c/ embellecedores", "Pantalla con comandos 5”", "Faros delanteros con DRL incluidos", "Retrovisores eléctricos"], precio:"2.809.900"},
 {nombre:"Active Triptonic 1.6", imagen:"imagen_1663.png", descripcion:["Llantas de 17” de acero c/ embellecedores", "Pantalla con comandos 5”", "Faros delanteros con DRL incluidos", "Retrovisores eléctricos"], precio:"3.028.000"},
 {nombre:"Allure 1.6", imagen:"imagen_1665.png", descripcion:["Llantas de 18” de acero c/ embellecedores", "Pantalla con comandos 5”", "Faros delanteros con DRL incluidos", "Retrovisores eléctricos"], precio:"3.046.700"},
 {nombre:"Allure Triptonic 1.6", imagen:"imagen_1668.png", descripcion:["Llantas de 19” de acero c/ embellecedores", "Pantalla con comandos 5”", "Faros delanteros con DRL incluidos", "Retrovisores eléctricos"], precio:"3.046.700"},
 {nombre:"Feline Triptonic 1.6", imagen:"imagen_1675.png", descripcion:["Llantas de 20” de acero c/ embellecedores", "Pantalla con comandos 5”", "Faros delanteros con DRL incluidos", "Retrovisores eléctricos"], precio:"3.046.700"},
 {nombre:"GT Line Triptonic", imagen:"imagen_1652.png", descripcion:["Llantas de 21” de acero c/ embellecedores", "Pantalla con comandos 5”", "Faros delanteros con DRL incluidos", "Retrovisores eléctricos"], precio:"4.677.755"},
 {nombre:"GT Triptonic", imagen:"imagen_1704.png", descripcion:["Llantas de 22” de acero c/ embellecedores", "Pantalla con comandos 5”", "Faros delanteros con DRL incluidos", "Retrovisores eléctricos"], precio:"4.685.673"}];

 function cargarModelos(modelos) {
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
}


function cargarModelos2(modelos) {
    let div_modelos = document.getElementById("modelos");
    let modelo_cliente = document.getElementById("modelo_cliente");
    
    for (let modelo of modelos) {
        let columna = document.createElement("div");
        columna.className = "col-4 py-3";
        let encabezado = document.createElement("h2");
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

        parrafo.appendChild(lista);
        card_body.appendChild(parrafo);
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