// Variables

const carrito = document.getElementById("carrito");

const cursos = document.getElementById("lista-cursos");

const listaCursos = document.querySelector("#lista-carrito tbody");




// Listeners

cargarListeners();

function cargarListeners(){
    // Se ejecuta cuando se presiona "Agregar Carrito"
    cursos.addEventListener("click",comprarCurso);

    // Cuando se elimina un curso del carrito

    carrito.addEventListener("click",eliminarCurso);
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
}

// Eliminar curso del carrito en el Dom
function eliminarCurso(e){
    e.preventDefault();
    
    if(e.target.classList.contains("borrar-curso")){
        e.target.parentElement.parentElement.remove();
    }
}