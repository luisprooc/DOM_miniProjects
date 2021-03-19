
import eventos from "./listeners.js";

export const formulario = document.getElementById("cotizar-seguro");


// Crear opciones del campo anios

const max = new Date().getFullYear(),
    min = max - 20;


const selectAnios = document.getElementById("anio");

for(let i = max; i >= min; i--){
    let option = document.createElement("option");
    option.value = i;
    option.innerText = i;
    selectAnios.appendChild(option);
}

// Listeners

eventos();