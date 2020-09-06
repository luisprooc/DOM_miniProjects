import {eliminarCita,editarCita,db} from "./funciones.js";
import {contenedorCitas} from "./selectores.js";
class Ui{

    imprimirAlerta(mensaje,tipo){
        // Crear div

        const divMensaje = document.createElement("div");

        divMensaje.classList.add("text-center","alert","d-block","col-12");
        // Agregar clase dependiendo el tipo de mensaje
        if(tipo === "error"){
            divMensaje.classList.add("alert-danger");
        }
        else{
            divMensaje.classList.add("alert-success");
        }

        // Agregar mensaje

        divMensaje.innerText = mensaje;

        // Agregar al DOM

        document.querySelector("#contenido").insertBefore(divMensaje,document.querySelector(".agregar-cita"));

        // Quitar despues de 3 segundos

        setTimeout(() =>{
            divMensaje.remove();
        },3000);
        
    }


    imprimirCitas(){
        this.limpiarHtml();

        const objectStore = db.transaction("citas").objectStore("citas");

        // Funciona como forEach
        objectStore.openCursor().onsuccess = (e) =>{
            const cursor = e.target.result;

            if(cursor){
                const {mascota,propietario,telefono,fecha,hora,sintomas,id} = cursor.value;

            const divCita = document.createElement("div");
            divCita.classList.add("cita","p-3");
            divCita.dataset.id = id;

            // scripting 

            const mascotaParrafo = document.createElement("h2");
            mascotaParrafo.classList.add("card-title","font-weight-bolder");
            mascotaParrafo.innerText = mascota;

            const propietarioParrafo = document.createElement("p");
            propietarioParrafo.innerHTML = `
                <span class =" font-weight-bolder"> Propietario: </span> ${propietario}
            `;

            const telefonoParrafo = document.createElement("p");
            telefonoParrafo.innerHTML = `
                <span class =" font-weight-bolder"> Telefono: </span> ${telefono}
            `;

            const fechaParrafo = document.createElement("p");
            fechaParrafo.innerHTML = `
                <span class =" font-weight-bolder"> Fecha: </span> ${fecha}
            `;

            const horaParrafo = document.createElement("p");
            horaParrafo.innerHTML = `
                <span class =" font-weight-bolder"> Hora: </span> ${hora}
            `;

            const sintomasParrafo = document.createElement("p");
            sintomasParrafo.innerHTML = `
                <span class =" font-weight-bolder"> Sintomas: </span> ${sintomas}
            `;
            
            // crear boton de eliminar
            const btnEliminar = document.createElement("button");
            btnEliminar.classList.add("btn","btn-danger","mr-2");
            btnEliminar.innerHTML = `
                Eliminar ❌
            `;

            btnEliminar.onclick = () => eliminarCita(id);
            // Agregar

            // crear boton de eliminar
            const btnEditar = document.createElement("button");
            btnEditar.classList.add("btn","btn-info");
            btnEditar.innerHTML = `
                Editar 📝
            `;
            
            const cita = cursor.value;
            btnEditar.onclick = () => editarCita(cita);

            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);

            // Agregar al DOM

            contenedorCitas.appendChild(divCita);

            // Ve al siguiente elemento

            cursor.continue();
            }
        }
    }

    limpiarHtml(){
        if(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }
}


export default Ui;