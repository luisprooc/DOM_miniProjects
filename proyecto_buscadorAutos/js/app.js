// variables

const resultado = document.getElementById("resultado");

const year = document.getElementById("year");

// obtener años
const max = new Date().getFullYear(); 
const min = max - 5;


// eventos

document.addEventListener("DOMContentLoaded", ()=>{
    // muestra los autos al cargar
    mostrarAutos();

    // llenar años del select

    llenarYears();
});




// funciones

function mostrarAutos(){
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
