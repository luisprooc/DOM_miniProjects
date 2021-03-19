import Interfaz from "./interfaz.js";
import Seguro from "./seguro.js";
import { formulario } from "./index.js";

function eventos(){
    formulario.addEventListener("submit",function(e){
    e.preventDefault();

    // Obtener marca seleccionada
    const marca = document.getElementById("marca");
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

    // Obtener año seleccionada
    const anio = document.getElementById("anio");
    const anioSeleccionado = anio.options[anio.selectedIndex].value;

    const tipo = document.querySelector("input[name=tipo]:checked").value;

    const interfaz = new Interfaz();

    // Revisamos si los campos estan vacios

    if(marcaSeleccionada === ""){
        interfaz.mostrarMensaje("Faltan datos, revisa el formulario","error");
    }

    else{

        interfaz.mostrarMensaje("cotizando...","correcto");

        // Limpiar resultados

        const resultados = document.querySelector("#resultado div");

        if(resultados != null){
            resultados.remove();
        }

        // Crear el seguro
        const seguro = new Seguro(marcaSeleccionada,anioSeleccionado,tipo);

        // cotizar

        const monto = seguro.cotizarSeguro();
        
        // Mostrar el resultado

        interfaz.mostrarResultado(seguro,monto);
    }
});
}

export default eventos;