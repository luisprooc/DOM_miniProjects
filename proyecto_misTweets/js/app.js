
// Variables

const listaTweets = document.getElementById("lista-tweets");


// Events Listeners

eventos();

function eventos(){
    document.querySelector("#formulario").addEventListener("submit",agregarTweet);

    // Borrar Tweets

    listaTweets.addEventListener("click",borrarTweet)
}



// Funciones

// añadir tweet del formulario

function agregarTweet(e){
    e.preventDefault();

    // Tener valor del textarea
    let tweet = document.getElementById("tweet").value;

    // crear boton de eliminar
    let botonBorrar = document.createElement("a");
    botonBorrar.classList.add("borrar-tweet");
    botonBorrar.innerText = "X";

    // crear elemento y añadirle el texto

    let li = document.createElement("li");
    li.innerText = tweet;
    // Añade el boton de borrar al tweet

    li.appendChild(botonBorrar);
    // Añade tweets a la lista
    listaTweets.appendChild(li);

}

function borrarTweet(e){
    e.preventDefault();

    // usar traversing para eliminar el elemento
    
    if(e.target.className === "borrar-tweet"){
        console.log(e.target.parentElement.remove());
    }

}