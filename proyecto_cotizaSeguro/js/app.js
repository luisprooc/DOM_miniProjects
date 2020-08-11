// Constructores

// Cotizaor constructor

function Seguro(marca,anio,tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

// Todo lo que se muestra

function Interfaz(){}


Interfaz.prototype.mostrarError = function(mensaje,tipo){
    const div = document.createElement("div");

    if(tipo === "error"){
        div.classList.add("mensaje","error");
    }

    else{
        div.classList.add("mensaje","correcto");
    }

    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div,document.querySelector(".form-group"));

    setTimeout(function(){
        document.querySelector(".mensaje").remove();
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
        interfaz.mostrarError("Faltan datos, revisa el formulario","error");
    }

    else{
        console.log("Correcto","correcto");
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