import { cursos, carrito, vaciarCarritoBtn } from "./index.js";
import { comprarCurso, eliminarCurso, vaciarCarrito,leerLocalStorage } from "./functions.js";

function cargarListeners(){
    // Se ejecuta cuando se presiona "Agregar Carrito"
    cursos.addEventListener("click",comprarCurso);

    // Cuando se elimina un curso del carrito

    carrito.addEventListener("click",eliminarCurso);

    // Cuando se presiona vaciar carrito

    vaciarCarritoBtn.addEventListener("click",vaciarCarrito);

    // Al cargar documento cargar local storage

    document.addEventListener("DOMContentLoaded",leerLocalStorage);
}

export default cargarListeners;