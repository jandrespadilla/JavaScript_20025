//EJEMPLO SPA PLANTILLA
const app = new ProductoController(new ProductoModel(), new ProductoView());

// LISTA DE RUTAS (ASOCIAR A CADA ACCION)
const routes = [
  { path: '/'       , action: 'agregar' },
  { path: '/listar', action: 'listar' },
  { path: '/buscar', action: 'buscar' },
];

//localStorage.clear();