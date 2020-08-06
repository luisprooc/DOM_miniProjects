// Variables

const carrito = document.getElementById("carrito");

const cursos = document.getElementById("lista-cursos");





// Listeners

cargarListeners();

function cargarListeners(){
    // Se ejecuta cuando se presiona "Agregar Carrito"
    cursos.addEventListener("click",comprarCurso);
}



// Funciones

// Agrega el curso al carrito

function comprarCurso(e){
    e.preventDefault();

    if(e.target.classList.contains("agregar-carrito")){
        const curso = e.target.parentElement.parentElement;
        leerDatosCurso(curso);
    }
}

// Leer los datos del curso

function leerDatosCurso(curso){
    console.log(curso);
}