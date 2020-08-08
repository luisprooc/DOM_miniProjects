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

    // Campos del formulario

    email.addEventListener("blur",validarCampo);
    asunto.addEventListener("blur",validarCampo);
    mensaje.addEventListener("blur",validarCampo);
}




// Funciones

function inicioApp(){
    btnEnviar.disabled = true;
}


// Verificar si en el campo hay algo

function validarCampo(){
    
    // Se validad la longitud del texto

    validarLongitud(this);

    // validar el email

    if(this.type === "email"){
        validarEmail(this);
    }

    let errores = document.querySelectorAll(".error");
    if(email.value != "" && asunto.value != "" && mensaje.value != ""){
        if(errores.length === 0){
            btnEnviar.disabled = false;
        }
        
    }
}

function validarLongitud(campo){
    if(campo.value.length > 0){
        campo.style.borderBottomColor = "green";
        campo.classList.remove("error");
    }

    else{
        campo.style.borderBottomColor = "red";
        campo.classList.add("error");
    }
}


// Validar email

function validarEmail(campo){
    const mensaje = campo.value;
    
    if(mensaje.indexOf("@") === -1 || mensaje.indexOf(".com") === -1 ){
        campo.style.borderBottomColor = "red";
        campo.classList.add("error");
    }
}