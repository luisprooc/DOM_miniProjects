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











// Listeners

document.addEventListener("DOMContentLoaded",function(){

    if(isNaN(presupuestoUsuario)){
        window.location.reload();
    }

    else{
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
        console.log(cantidadPresupuesto);
    }
});














