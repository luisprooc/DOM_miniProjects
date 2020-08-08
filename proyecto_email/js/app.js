// variables

const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const btnEnviar = document.getElementById("enviar");



// Listeners

eventos();

function eventos(){

    // Cuando cargue la pagina
    document.addEventListener("DOMContentLoaded",inicioApp);
}




// Funciones

function inicioApp(){
    btnEnviar.disabled = true;
}