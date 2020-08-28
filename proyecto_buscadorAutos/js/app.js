// variables

const resultado = document.getElementById("resultado");

const marca = document.getElementById("marca");
const year = document.getElementById("year");
const minimo = document.getElementById("minimo");
const maximo = document.getElementById("maximo");
const puertas = document.getElementById("puertas");
const transmision = document.getElementById("transmision");
const color = document.getElementById("color");

// obtener años
const max = new Date().getFullYear(); 
const min = max - 5;

// Generar datos de busqueda

const datosBusqueda = {
    marca: "",
    año: "",
    min: "",
    max: "",
    puertas: "",
    transmision: "",
    color: ""
}


// eventos

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
    datosBusqueda.año = e.target.value;
    
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
    
});

transmision.addEventListener("change", (e) => {
    datosBusqueda.transmision = e.target.value;
    
});

color.addEventListener("change", (e) => {
    datosBusqueda.color = e.target.value;
});


// funciones

function mostrarAutos(autos){
    limpiarHtml();
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


// limpiar HTML
function limpiarHtml(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}



function llenarYears(){

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

function filtrarAuto(){
    // funcion de alto nivel
    const autosFiltrados = autos.filter( filtrarMarca ).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo);

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
    if(datosBusqueda.año){
        return auto.year === parseInt(datosBusqueda.año);
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
