import { email,asunto,mensaje,btnEnviar,resetBtn } from "./index.js";
import { inicioApp, validarCampo, enviarEmail, resetFormulario } from "./functions.js";

function eventos(){

    // Cuando cargue la pagina
    document.addEventListener("DOMContentLoaded",inicioApp);

    // Campos del formulario

    email.addEventListener("blur",validarCampo);
    asunto.addEventListener("blur",validarCampo);
    mensaje.addEventListener("blur",validarCampo);

    // boton enviar

    btnEnviar.addEventListener("click",enviarEmail);

    // Boton reset

    resetBtn.addEventListener("click",resetFormulario);
}


export default eventos;