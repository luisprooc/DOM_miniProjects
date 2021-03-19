import { email,asunto,mensaje,btnEnviar, formulario } from "./index.js";

// Funciones

export function inicioApp(){
    btnEnviar.disabled = true;
}


// Verificar si en el campo hay algo

export function validarCampo(){
    
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

export function validarLongitud(campo){
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


// function enviar email

export function enviarEmail(e){
    // Spinner al presionar enviar
    let spinnerGif = document.querySelector("#spinner");
    spinnerGif.style.display = "block";

    // Gif enviado
    const enviado = document.createElement("img");
    enviado.src = "img/mail.gif";
    enviado.style.display = "block";

    // ocultar spinner y mostrar enviado

    setTimeout(function(){
        spinnerGif.style.display = "none";

        document.querySelector("#loaders").appendChild(enviado);

        setTimeout(function(){
            document.querySelector("#loaders").removeChild(enviado);
        },4000);
        formulario.reset();
    },3000);
    

    
    e.preventDefault();
    
}

export function resetFormulario(e){
    formulario.reset();
    e.preventDefault();

}