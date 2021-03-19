
import { listaTweets } from "./index.js";
// Funciones

// añadir tweet del formulario

export function agregarTweet(e){
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

    // Agregar tweet a localStorage
    agregarTweetLocalStorage(tweet);
}

// Eliminar el tweet
export function borrarTweet(e){
    e.preventDefault();

    // usar traversing para eliminar el elemento
    
    if(e.target.className === "borrar-tweet"){
    e.target.parentElement.remove();
    borrarTweetLocalStorage(e.target.parentElement.textContent);
    }

}

// Agregar tweet a Local Storage

export function agregarTweetLocalStorage(tweet){
    let tweets;
    tweets = obtenerTweetsLocalStorage();

    // Añadir nuevo tweet

    tweets.push(tweet);
    // Convertir de string a arreglo

    localStorage.setItem("tweets",JSON.stringify(tweets));
}


// Revisar si hay tweets en local storage

export function obtenerTweetsLocalStorage(){
    let tweets;
    // Revisar valores del local Storage
    if(localStorage.getItem("tweets") === null){
        tweets = [];
    }

    else{
        tweets = JSON.parse(localStorage.getItem("tweets"));
    }
    return tweets;
}

// Mostrar datos del local storage

export function localStorageListo(){
    let tweets;

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet){
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
    })
}

// eliminar tweet en local storage

export function borrarTweetLocalStorage(tweet){
    let tweets, tweetBorrar;
    tweetBorrar = tweet.substring(0,tweet.length -1);
    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet,index){
        if(tweetBorrar === tweet){
            tweets.splice(index,1);
        }
    });
    localStorage.setItem("tweets",JSON.stringify(tweets));
}