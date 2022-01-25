// Guardo los modelos en la LocalStorage
guardarModelosLocal(modelos);

// Actualizo el Contador de Productos del Carrito
actualizarContadorCarrito();

// Cargo los modelos
cargarModelos2();

// Asigno el evento click al boton Enviar Datos
document.getElementById("enviar_datos").addEventListener("click", enviarDatos);

// Asigno el evento click al boton Cargar Datos
document.getElementById("cargar_datos").addEventListener("click", cargarDatos);

// Asigno el evento click al boton Borrar Datos
document.getElementById("borrar_datos").addEventListener("click", borrarDatos);