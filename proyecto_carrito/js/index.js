import cargarListeners from "./listeners.js";

// Variables

export const carrito = document.getElementById("carrito");
export const cursos = document.getElementById("lista-cursos");
export const listaCursos = document.querySelector("#lista-carrito tbody");
export const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

// Listeners

cargarListeners();
