import {
    mascotaInput,propietarioInput,telefonoInput,fechaInput,
    horaInput,sintomasInput,formulario
} from "./selectores.js";

import {datosCitas,nuevaCita} from "./funciones.js";
// eventos

eventos();

function eventos(){
    mascotaInput.addEventListener("change",datosCitas);
    propietarioInput.addEventListener("change",datosCitas);
    telefonoInput.addEventListener("change",datosCitas);
    fechaInput.addEventListener("change",datosCitas);
    horaInput.addEventListener("change",datosCitas);
    sintomasInput.addEventListener("change",datosCitas);

    // formulario

    formulario.addEventListener("submit",nuevaCita);
}

