document.querySelector("#generar-nombre").addEventListener("submit",cargarNombres);


// LLamada a AJAX

function cargarNombres(e){
    e.preventDefault();

    // Variables

    const origen = document.getElementById("origen");
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById("genero");
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const cantidad = document.getElementById("numero").value;

    let url = "";
    url+= "https://uinames.com/api/?";

    // comprobar si existe un origen y agregarlo al API

    if(origenSeleccionado != ""){
        url+= `region=${origenSeleccionado}&`;
    }

    // comprobar si existe un genero y agregarlo al API
    if(generoSeleccionado != ""){
        url+= `gender=${generoSeleccionado}&`;
    }

    // agregar cantidad de nombres
    url+= `amount=${cantidad}&`;
    

}