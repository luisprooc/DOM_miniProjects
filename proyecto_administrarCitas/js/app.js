// variables

const mascotaInput = document.getElementById("mascota");
const propietarioInput = document.getElementById("propietario");
const telefonoInput = document.getElementById("telefono");
const fechaInput = document.getElementById("fecha");
const horaInput = document.getElementById("hora");
const sintomasInput = document.getElementById("sintomas");

const formulario = document.getElementById("nueva-cita");

const contenedorCitas = document.getElementById("citas");


// eventos

eventos();

function eventos(){
    mascotaInput.addEventListener("change",datosCitas);
    propietarioInput.addEventListener("change",datosCitas);
    telefonoInput.addEventListener("change",datosCitas);
    fechaInput.addEventListener("change",datosCitas);
    horaInput.addEventListener("change",datosCitas);
    sintomasInput.addEventListener("change",datosCitas);

    // formulario

    formulario.addEventListener("submit",nuevaCita);
}


// Clases

class Citas{
    constructor(){
        this.citas = [];
    }

    agregarCita(cita){
        this.citas = [...this.citas,cita];
        console.log(this.citas);
    }
}

class Ui{

    imprimirAlerta(mensaje,tipo){
        // Crear div

        const divMensaje = document.createElement("div");

        divMensaje.classList.add("text-center","alert","d-block","col-12");
        // Agregar clase dependiendo el tipo de mensaje
        if(tipo === "error"){
            divMensaje.classList.add("alert-danger");
        }
        else{
            divMensaje.classList.add("alert-success");
        }

        // Agregar mensaje

        divMensaje.innerText = mensaje;

        // Agregar al DOM

        document.querySelector("#contenido").insertBefore(divMensaje,document.querySelector(".agregar-cita"));

        // Quitar despues de 3 segundos

        setTimeout(() =>{
            divMensaje.remove();
        },3000)
        
    }
}

const ui = new Ui();
const administrarCitas = new Citas();




// Datos que se agegaran
const citaObj = {
    mascota: "",
    propietario: "",
    telefono: "",
    fecha: "",
    hora: "",
    sintomas: ""
}

// funciones 

function datosCitas(e){
    citaObj[e.target.name] = e.target.value;
}


function nuevaCita(e){
    e.preventDefault();

    // validar

    for(let i in citaObj){
        if(citaObj[i] === ""){
            ui.imprimirAlerta("Revisa detenidamente la informacion que has proporcionado","error");
            return 0;
        }
    }
    ui.imprimirAlerta("Proceso terminado satisfactoriamente","success");

    // Agregar id
    citaObj.id = Date.now();

    // Agregar copia del objeto
    administrarCitas.agregarCita({...citaObj});

    // Reiniciar formulario

    formulario.reset();

    // Reiniciar objeto

    reiniciarObjeto();
}

function reiniciarObjeto(){
    for(let i in citaObj){
        citaObj[i] = "";
    }
}