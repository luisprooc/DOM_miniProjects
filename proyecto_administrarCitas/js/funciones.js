import Citas from "./Citas.js";
import Ui from "./Ui.js";

import {
    mascotaInput,propietarioInput,telefonoInput,fechaInput,
horaInput,sintomasInput,formulario
} from "./selectores.js";

let editando,db;



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

export function datosCitas(e){
    citaObj[e.target.name] = e.target.value;
}


export function nuevaCita(e){
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

export function eliminarCita(id){

    // eliminar cita
    administrarCitas.eliminarCita(id);
    
    // Mostrar mensaje 
    ui.imprimirAlerta("Cita eliminada satisfactoriamente","success");

    // limpiar html
    ui.limpiarHtml();

    // agregar citas
    ui.imprimirCitas(administrarCitas);

}

export function editarCita(cita){

    // Destructuring

    const {mascota,propietario,telefono,fecha,hora,sintomas} = cita;

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

export function crearDB(){
    // Crear DB en version 1.0

    const DB = window.indexedDB.open("citas",1);
    
    // Si ocurre un error

    DB.onerror = () =>{
        alert("Ha ocurrido un error en la creacion de la DB");
    }

    // Si se crea
    DB.onsuccess = () =>{
        console.log("DB creada");
        db = DB.result;

    }

    DB.onupgradeneeded = (e) =>{
        const db = e.target.result;

        const objectStore = db.createObjectStore("citas",
        {
            keyPath: "id",
            autoIncrement: true
        });

        // Definir todas las columnas

        objectStore.createIndex("mascota","mascota",{unique:false});
        objectStore.createIndex("propietario","propietario",{unique:false});
        objectStore.createIndex("telefono","telefono",{unique:false});
        objectStore.createIndex("fecha","fecha",{unique:false});
        objectStore.createIndex("hora","hora",{unique:false});
        objectStore.createIndex("sintomas","sintomas",{unique:false});
        objectStore.createIndex("id","id",{unique:true});
    }
}