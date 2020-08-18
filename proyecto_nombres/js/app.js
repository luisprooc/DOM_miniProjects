document.querySelector("#generar-nombre").addEventListener("submit",cargarNombres);

let url;
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
    
    // cargar datos a AJAX
    cargarAJAX(url);
}

function cargarAJAX(url){
    const xhr = new XMLHttpRequest();

    xhr.open("GET",url,true);

    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status ===200){

            const nombres = JSON.parse(this.responseText);

            let templateHtml = "<h2> Nombres generados <h2>";

            templateHtml += "<ul class = 'lista'>";

            nombres.forEach(function(nombre){
                templateHtml += `<li> ${nombre.name}`;
            })

            templateHtml += "</ul>";

            document.querySelector("#resultado").innerHTML = templateHtml;
        }
    }

    xhr.send();
}

