import { cantidadPresupuesto,formulario } from "./index.js";

// Maneja todo lo relacionado con HTML

class Interfaz{
    insertarPresupuesto(cantidad){
        const presupuestoSpan = document.querySelector("span#total");
        const restanteSpan = document.querySelector("span#restante");

        // Insertar en el html

        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }

    imprimirMensaje(mensaje,tipo){
        const divMensaje = document.createElement("div");
        divMensaje.classList.add("text-center","alert");

        if(tipo === "error"){
            divMensaje.classList.add("alert-danger");
        }

        else{
            divMensaje.classList.add("alert-success");
        }

        // Agregar texto
        divMensaje.appendChild(document.createTextNode(mensaje));

        // Insertar en el DOM
        document.querySelector(".primario").insertBefore(divMensaje,formulario);

        // Eliminar luego de 3 segundos

        setTimeout(function(){
            document.querySelector(".primario .alert").remove();
            formulario.reset();
        },3000);
    }

    // Inserta los datos a la lista

    agregarGastoListado(nombre,cantidad){
        const gastosListado = document.querySelector("#gastos ul");

        // crear li
        const li = document.createElement("li");

        li.innerHTML = `
            ${nombre}
            
            <span class = "badge badge-primary badge-pill"> $ ${cantidad} </span>
        `;

        li.className = "List-group-item d-flex justify-content-between align-item-center";
        gastosListado.appendChild(li);
    }

    // Comprueba el resultado retante

    presupuestoRestante(cantidad){
        const restante = document.querySelector("span#restante");

        const prespuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad);

        restante.innerHTML = `${prespuestoRestanteUsuario}`;
        this.comprobarPresupuesto();
    }

    // Cambiar de color el presupuesto restante

    comprobarPresupuesto(){
        const presupuestoTotal = cantidadPresupuesto.presupuesto;
        const presupuestoRestante = cantidadPresupuesto.restante;

        // obtener 25%

        if( (presupuestoTotal / 4) > presupuestoRestante){
            const restante = document.querySelector(".restante");
            restante.classList.remove("alert-sucess","alert-warning");
            restante.classList.add("alert-danger");
        }

        // obtener 50%
        else if( (presupuestoTotal / 2) > presupuestoRestante){
            const restante = document.querySelector(".restante");
            restante.classList.remove("alert-sucess","alert-danger");
            restante.classList.add("alert-warning");
        }
    }
}

export default Interfaz;