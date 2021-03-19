import { datosBusqueda,marca,year, minimo, maximo, puertas, transmision, color  } from "./index.js";
import { mostrarAutos, llenarYears, filtrarAuto  } from "./functions.js";
import autos from "./db.js";

// eventos

function eventos(){

    document.addEventListener("DOMContentLoaded", ()=>{
        // muestra los autos al cargar
        mostrarAutos(autos);
    
        // llenar años del select
    
        llenarYears();
    });
    
    // obtener valores de los select
    marca.addEventListener("change", (e) => {
        datosBusqueda.marca = e.target.value;
        
        filtrarAuto();
    });
    
    year.addEventListener("change", (e) => {
        datosBusqueda.year = e.target.value;
        
        filtrarAuto();
    });
    
    minimo.addEventListener("change", (e) => {
        datosBusqueda.min = e.target.value;
    
        filtrarAuto();
        
    });
    
    maximo.addEventListener("change", (e) => {
        datosBusqueda.max = e.target.value;
    
        filtrarAuto();
        
    });
    
    puertas.addEventListener("change", (e) => {
        datosBusqueda.puertas = e.target.value;
        
        filtrarAuto();
    });
    
    transmision.addEventListener("change", (e) => {
        datosBusqueda.transmision = e.target.value;
    
        filtrarAuto();
        
    });
    
    color.addEventListener("change", (e) => {
        datosBusqueda.color = e.target.value;
    
        filtrarAuto();
    });
}

export default eventos;