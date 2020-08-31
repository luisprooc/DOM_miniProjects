// variables

const mascotaInput = document.getElementById("mascota");
const propietarioInput = document.getElementById("propietario");
const telefonoInput = document.getElementById("telefono");
const fechaInput = document.getElementById("fecha");
const horaInput = document.getElementById("hora");
const sintomasInput = document.getElementById("sintomas");

const formulario = document.getElementById("nueva-cita");

const contenedorCitas = document.getElementById("citas");

let editando;


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
    }

    eliminarCita(id){
        this.citas = this.citas.filter(cita => cita.id != id);

    }

    editarCita(citaActualizada){
        this.citas = this.citas.filter(cita => cita.id != citaActualizada.id);
        this.citas.push(citaActualizada);
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
        },3000);
        
    }

    // Destructuring en el parametro
    imprimirCitas({citas}){
        this.limpiarHtml();
        citas.forEach(cita =>{
            const {mascota,propietario,telefono,fecha,hora,sintomas,id} = cita;

            const divCita = document.createElement("div");
            divCita.classList.add("cita","p-3");
            divCita.dataset.id = id;

            // scripting 

            const mascotaParrafo = document.createElement("h2");
            mascotaParrafo.classList.add("card-title","font-weight-bolder");
            mascotaParrafo.innerText = mascota;

            const propietarioParrafo = document.createElement("p");
            propietarioParrafo.innerHTML = `
                <span class =" font-weight-bolder"> Propietario: </span> ${propietario}
            `;

            const telefonoParrafo = document.createElement("p");
            telefonoParrafo.innerHTML = `
                <span class =" font-weight-bolder"> Telefono: </span> ${telefono}
            `;

            const fechaParrafo = document.createElement("p");
            fechaParrafo.innerHTML = `
                <span class =" font-weight-bolder"> Fecha: </span> ${fecha}
            `;

            const horaParrafo = document.createElement("p");
            horaParrafo.innerHTML = `
                <span class =" font-weight-bolder"> Hora: </span> ${hora}
            `;

            const sintomasParrafo = document.createElement("p");
            sintomasParrafo.innerHTML = `
                <span class =" font-weight-bolder"> Sintomas: </span> ${sintomas}
            `;
            
            // crear boton de eliminar
            const btnEliminar = document.createElement("button");
            btnEliminar.classList.add("btn","btn-danger","mr-2");
            btnEliminar.innerHTML = `
                Eliminar ❌
            `;

            btnEliminar.onclick = () => eliminarCita(id);
            // Agregar

            // crear boton de eliminar
            const btnEditar = document.createElement("button");
            btnEditar.classList.add("btn","btn-info");
            btnEditar.innerHTML = `
                Editar 📝
            `;

            btnEditar.onclick = () => editarCita(cita);

            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);

            // Agregar al DOM

            contenedorCitas.appendChild(divCita);

            
        });
    }

    limpiarHtml(){
        if(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
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
    if(validarObjeto()){
        ui.imprimirAlerta("Revisa detenidamente la informacion que has proporcionado","error");
    }

    else{

        if(editando){
            // mostrar mensaje de finalizacion
            ui.imprimirAlerta("Cita editada satisfactoriamente","success");

            //pasar copia de la cita a editar
            administrarCitas.editarCita({...citaObj});

            // cambiar boton a texto original
            formulario.querySelector("button[type= 'submit']").textContent = "CREAR CITA";

            editando = false;

            // limpiar

            ui.limpiarHtml();

        }

        else{

            ui.imprimirAlerta("Cita agregada satisfactoriamente","success");

            // Agregar id
            citaObj.id = Date.now();
    
            // Agregar copia del objeto
            administrarCitas.agregarCita({...citaObj});
        }

        // imprimir citas

        ui.imprimirCitas(administrarCitas);
        
        // Reiniciar objeto

        reiniciarObjeto();

        // Reiniciar formulario

        formulario.reset();

    }
}



function validarObjeto(){
    for(let i in citaObj){
        if(citaObj[i] === ""){
            return true;
        }
    }
    return false;
}


function reiniciarObjeto(){
    citaObj.fecha = "";
    citaObj.hora = "";
    citaObj.mascota = "";
    citaObj.propietario = "";
    citaObj.sintomas = "";
    citaObj.telefono = "";
}

function eliminarCita(id){

    // eliminar cita
    administrarCitas.eliminarCita(id);
    
    // Mostrar mensaje 
    ui.imprimirAlerta("Cita eliminada satisfactoriamente","success");

    // limpiar html
    ui.limpiarHtml();

    // agregar citas
    ui.imprimirCitas(administrarCitas);

}

function editarCita(cita){

    // Destructuring

    const {mascota,propietario,telefono,fecha,hora,sintomas,id} = cita;

    // llenar los campos
    mascotaInput.value = mascota;
    propietarioInput.value =  propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    // LLenar el objeto

    citaObj.fecha = fecha;
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;

    // cambiar el texto del button

    formulario.querySelector("button[type= 'submit']").textContent = "GUARDAS CAMBIOS";

    editando = true;


}

