// variables

import eventos from "./listeners.js";

export const resultado = document.getElementById("resultado");

export const marca = document.getElementById("marca");
export const year = document.getElementById("year");
export const minimo = document.getElementById("minimo");
export const maximo = document.getElementById("maximo");
export const puertas = document.getElementById("puertas");
export const transmision = document.getElementById("transmision");
export const color = document.getElementById("color");

// obtener años
export const max = new Date().getFullYear(); 
export const min = max - 5;

// Generar datos de busqueda

export const datosBusqueda = {
    marca: "",
    year: "",
    min: "",
    max: "",
    puertas: "",
    transmision: "",
    color: ""
}


eventos();

