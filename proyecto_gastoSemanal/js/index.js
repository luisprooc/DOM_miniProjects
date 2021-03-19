
import Interfaz from "./interfaz.js";
import Presupuesto from "./presupuesto.js";

// Variables

export const presupuestoUsuario = parseInt(prompt("Introduce tu presupuesto semanal: "));
export const formulario = document.getElementById("agregar-gasto");
export let cantidadPresupuesto;



// Listeners


document.addEventListener("DOMContentLoaded",function(){

    if(isNaN(presupuestoUsuario)){
        // Si no se introduce un numero se recarga la ventana
        alert("Debes introducir un numero");
        window.location.reload();
    }

    else{
        // Instanciar presupuesto

        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
        
        const ui = new Interfaz();

        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
    }
});



formulario.addEventListener("submit",function(e){
    e.preventDefault();

    // obtener valores del campo
    const nombreGasto = document.querySelector("#gasto").value;
    const cantidadGasto = parseInt(document.querySelector("#cantidad").value);

    // instanciar interfaz

    const ui = new Interfaz();

    if(nombreGasto === "" || cantidadGasto === "" || isNaN(cantidadGasto)){

        ui.imprimirMensaje("Ocurrio un error, llena los campos correctamente","error");
    }

    else{
        ui.imprimirMensaje("Correcto","correto");
        ui.agregarGastoListado(nombreGasto,cantidadGasto);
        ui.presupuestoRestante(cantidadGasto);
        
    }
});











