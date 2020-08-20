//

eventos = () => document.querySelector("#generar-nombre").addEventListener("submit",cargarNombres);

let url;
// LLamada a AJAX

const cargarNombres = (e) => {
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
    
    // cargar datos a Fetch
    cargarFeth(url);
}

const cargarFeth = (url) => {
    // Abrir fetch
    fetch(url)
        // Leer datos
        .then(res => res.json())

        // Imprimir datos
        .then(nombres => {
            let html = "<h2> Nombres generados";

            html += "<ul>";

            // Recorrer nombres
            nombres.forEach(nombre => {
                html += `<li> ${nombre.name} </li>`;
            });

            html += "</ul>";

            document.getElementById("resultado").innerHTML = html;
        })

        .catch(error => {
            document.getElementById("resultado").innerHTML = ` Actualmente no es posible
            generar nombres desde esta API: <b>${error}</b>
            `;
        })

}

eventos();