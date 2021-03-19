import { max, min, resultado,year, datosBusqueda } from "./index.js";
import autos from "./db.js";

// funciones

export function mostrarAutos(autos){
    limpiarHtml();
    if(autos.length > 0){
        autos.forEach(auto => {
            
            // destructuring
            const {marca, modelo, year, puertas, transmision, precio, color} = auto;
            const html = document.createElement("p");
            
            html.textContent = `
            ${marca}-${modelo}-${year}-${puertas}-${transmision}-${precio}-${color}
            `;
            resultado.appendChild(html);
        });
    }
    else{
        const html = document.createElement("h1");

        html.innerText = "No hay autos en stock";
        
        html.style.color = "red";
        html.style.textDecoration = "underline";
        resultado.appendChild(html);
    }
}


// limpiar HTML
function limpiarHtml(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}



export function llenarYears(){

    // Recorrer de adelante hacia atras los años
    for(let i = max; i >= min;--i ){
        const opcion = document.createElement("option");

        opcion.value = i;

        opcion.textContent = i;

        // Agregar la opcion al select
        year.appendChild(opcion);
    }
}


// Filtrar en base a la marca

export function filtrarAuto(){
    // funcion de alto nivel
    const autosFiltrados = autos.filter( filtrarMarca ).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo)
    .filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    mostrarAutos(autosFiltrados);
}

// Aqui se le pasa el parametro para iterar los autos
function filtrarMarca(auto){
    // Si hay un valor en marca filtra
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    }

    // De lo contrario muestra el auto completo
    return auto;
}

function filtrarYear(auto){
    if(datosBusqueda.year){
        return auto.year === parseInt(datosBusqueda.year);
    }

    return auto;
}

function filtrarMinimo(auto){
    if(datosBusqueda.min){
        return auto.precio >= Number(datosBusqueda.min);
    }

    return auto;
}

function filtrarMaximo(auto){
    if(datosBusqueda.max){
        return auto.precio <= Number(datosBusqueda.max);
    }

    return auto;
}

function filtrarPuertas(auto){
    if(datosBusqueda.puertas){
        return auto.puertas == Number(datosBusqueda.puertas);
    }

    return auto;
}

function filtrarTransmision(auto){
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    }

    return auto;
}

function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    }

    return auto;
}