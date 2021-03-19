import { agregarTweet, borrarTweet,localStorageListo } from "./functions.js";
import { listaTweets } from "./index.js";

function eventos(){
    document.querySelector("#formulario").addEventListener("submit",agregarTweet);

    // Borrar Tweets

    listaTweets.addEventListener("click",borrarTweet);

    // Contenido cargado

    document.addEventListener("DOMContentLoaded",localStorageListo);

}

export default eventos;