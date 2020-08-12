// Variables

const presupuestoUsuario = parseInt(prompt("Introduce tu presupuesto semanal: "));

let cantidadPresupuesto;








// Clases


class Presupuesto{

    constructor(presupuesto) {
        this.Presupuesto = presupuesto;
        this.restante = presupuesto;
    }

    presupuestoRestante(cantidad){
        return this.restante -= cantidad;
    }
}

// Maneja todo lo relacionado con HTML
class Interfaz{
    insertarPresupuesto(cantidad){
        const presupuestoSpan = document.querySelector("span#total");
        const restanteSpan = document.querySelector("span#restante");

        // Insertar en el html

        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }

}









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

        ui.insertarPresupuesto(cantidadPresupuesto.Presupuesto);
    }
});














