class Presupuesto{

    constructor(presupuesto) {
        this.presupuesto = presupuesto;
        this.restante = presupuesto;
    }

    presupuestoRestante(cantidad = 0){
        if(this.restante <= cantidad){
            alert("Ya gastaste el presupuesto de la semana , Todo lo agregado a continuacion se descontara de la proxima semana");
            
        }
        return this.restante -= cantidad;
    }
}

export default Presupuesto;