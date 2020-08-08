// Variables

const carrito = document.getElementById("carrito");

const cursos = document.getElementById("lista-cursos");

const listaCursos = document.querySelector("#lista-carrito tbody");

const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

// Listeners

cargarListeners();

function cargarListeners(){
    // Se ejecuta cuando se presiona "Agregar Carrito"
    cursos.addEventListener("click",comprarCurso);

    // Cuando se elimina un curso del carrito

    carrito.addEventListener("click",eliminarCurso);

    // Cuando se presiona vaciar carrito

    vaciarCarritoBtn.addEventListener("click",vaciarCarrito);

    // Al cargar documento cargar local storage

    document.addEventListener("DOMContentLoaded",leerLocalStorage);
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
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id")
    }
    insertarCarrito(infoCurso);
}


// Muestra el curso seleccionado en el carrito

function insertarCarrito(infoCurso){
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>
            <img src ="${infoCurso.imagen}" width =100>
        </td>
        <td> ${infoCurso.titulo} </td>
        <td> ${infoCurso.precio} </td>
        <td> 
            <a href"#" class="borrar-curso" data-id="${infoCurso.id}"
            >X</a>
        </td>
    `;
    listaCursos.appendChild(row);
    guardarCursoLocalStorage(infoCurso);
}

// Eliminar curso del carrito en el Dom
function eliminarCurso(e){
    e.preventDefault();
    let curso,cursoId; 
    if(e.target.classList.contains("borrar-curso")){
        e.target.parentElement.parentElement.remove();
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector("a").getAttribute("data-id");
    }

    eliminarCursoLocalStorage(cursoId)
}

// Eliminar todos los cursos del carrito en el Dom

function vaciarCarrito(){
    // forma lenta
    //listaCursos.innerHTML = "";

    // forma rapida

    while(listaCursos.firstChild){
        listaCursos.removeChild(listaCursos.firstChild);
    }

    // Vaciar todo en LS
    vaciarLocalStorage();

    // Para que no haga un salto en el sitio
    return false
}


// Obtener los cursos del LS
function obtenerCursosLocalStorage(){
    let cursosLS;

    // Comprobamos si hay cursos en local storage

    if(localStorage.getItem("cursos") === null){
        cursosLS = [];
    }

    else{
        // Pasar los cursos en forma de arreglo
        cursosLS = JSON.parse(localStorage.getItem("cursos"));
    }

    return cursosLS;
}

// Almacena cursos del carrito al local storage

function guardarCursoLocalStorage(curso){
    let cursos;
    cursos = obtenerCursosLocalStorage();
    
    // El curso seleccionado se agrega al arreglo
    cursos.push(curso);

    localStorage.setItem("cursos",JSON.stringify(cursos));
}


// Imprime los cursos del local storage en el carrito

function leerLocalStorage(){
    let cursosLS;
    cursosLS = obtenerCursosLocalStorage();

    cursosLS.forEach(function(infoCurso){
        // Leer los cursos del LS

        const row = document.createElement("tr");
        row.innerHTML = `
        <td>
            <img src ="${infoCurso.imagen}" width =100>
        </td>
        <td> ${infoCurso.titulo} </td>
        <td> ${infoCurso.precio} </td>
        <td> 
            <a href"#" class="borrar-curso" data-id="${infoCurso.id}"
            >X</a>
        </td>
        `;
        listaCursos.appendChild(row);
    });
}


// Eliminar curso por id en LS

function eliminarCursoLocalStorage(curso){
    let cursosLS;
    cursosLS = obtenerCursosLocalStorage();

    // Recorrer todos los cursos de LS
    cursosLS.forEach(function(cursoLS,index){
        // Comparar si el curso seleccionado es el que se desea eliminar
        if(cursoLS.id === curso){
            // Eliminar del arreglo
            cursosLS.splice(index,1)
        }
    });
    // Actualizar LS
    localStorage.setItem("cursos",JSON.stringify(cursosLS));
}


// Vaciar todo el local storage

function vaciarLocalStorage(){
    localStorage.clear();
}