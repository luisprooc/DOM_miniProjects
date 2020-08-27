// variables

const resultado = document.getElementById("resultado");



// eventos

document.addEventListener("DOMContentLoaded", ()=>{
    mostrarAutos();
});




// funciones

function mostrarAutos(){
    autos.forEach(auto => {
        
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const html = document.createElement("p");

        html.textContent = `
            ${marca}-${modelo}-${year}-${puertas}-${transmision}-${precio}-${color}
        `;
        resultado.appendChild(html);
    });

}