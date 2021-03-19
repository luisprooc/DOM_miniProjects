// Todo lo que se muestra
import { formulario } from "./index.js";

class Interfaz{


    mostrarMensaje(mensaje,tipo){
        const div = document.createElement("div");

        if(tipo === "error"){
            div.classList.add("mensaje",tipo);
        }

        else{
            div.classList.add("mensaje",tipo);
        }

        div.innerHTML = `${mensaje}`;
        formulario.insertBefore(div,document.querySelector(".form-group"));

        setTimeout(function(){
            document.querySelector(".mensaje").remove();
        },3000);
    }


    mostrarResultado(seguro,monto){
        const resultado = document.getElementById("resultado");
        let marca;

        switch(seguro.marca){
            case "1":
                marca = "Americano";
                break;

            case "2":
                marca = "Asiatico";
                break;
            
            default:
                marca = "Europeo";
                break;

        }

        const div = document.createElement("div");

        div.innerHTML = `
            <p class = "header"> <strong>Tu resumen: </strong> </p>
            <p>Marca: ${marca} </p>
            <p>Año: ${seguro.anio}</p>
            <p>Tipo: ${seguro.tipo}</p>
            <p> <strong> Total: ${monto} </strong> </p>
        `;

        

        const spinner = document.querySelector("#cargando img");
        spinner.style.display = "block";

        setTimeout(function(){
            spinner.style.display = "none";

        resultado.appendChild(div);
        },3000);

    }

}

export default Interfaz;