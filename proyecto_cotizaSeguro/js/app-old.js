// Constructores

// Cotizaor constructor

function Seguro(marca,anio,tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}


Seguro.prototype.cotizarSeguro = function(){
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


// Todo lo que se muestra

function Interfaz(){}


Interfaz.prototype.mostrarMensaje = function(mensaje,tipo){
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


Interfaz.prototype.mostrarResultado = function(seguro,monto){
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


// Eventos

const formulario = document.getElementById("cotizar-seguro");

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






// Crear opciones del campo anios

const max = new Date().getFullYear(),
    min = max - 20;


const selectAnios = document.getElementById("anio");

for(let i = max; i >= min; i--){
    let option = document.createElement("option");
    option.value = i;
    option.innerText = i;
    selectAnios.appendChild(option);
}