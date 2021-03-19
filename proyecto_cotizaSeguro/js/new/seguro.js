// Cotizador constructor

class Seguro{
    constructor(marca,anio,tipo){
        this.marca = marca;
        this.anio = anio;
        this.tipo = tipo;
    }

    
    cotizarSeguro(){
        /*
            1 = americano 1.15
            2 = asiatico 1.05
            3 = europeo 1.35

        */
        let cantidad;
        const base = 2000;

        switch(this.marca){
            case "1":
                cantidad = base * 1.15;
                break;

            case "2":
                cantidad = base * 1.05;
                break;
            
            default:
                cantidad = base * 1.35;
                break;

        }

        // leer el año

        const diferencia = new Date().getFullYear() - this.anio;
        
        // cada año de diferencia hay que reducir en un 3%

        cantidad -= (diferencia * 0.03) * cantidad;

        // Si el seguro es basico se multiplica por 30%
        // Si es completo por 50%

        if(this.tipo === "basico"){
            cantidad *= 1.30; 
        }

        else{
            cantidad *= 1.50;
        }

        return parseInt(cantidad);
    }

}

export default Seguro;