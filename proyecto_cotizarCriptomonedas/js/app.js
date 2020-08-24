// leer formulario

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();

    // leer moneda seleccionada

    const moneda = document.getElementById("moneda");
    const monedaSelect = moneda.options[moneda.selectedIndex].value;

    // leer cripto seleccionada

    const cripto = document.getElementById("criptomoneda");
    const criptoSelect = cripto.options[cripto.selectedIndex].value;

    // comprobar que no esten vacias

    if(monedaSelect === "" || criptoSelect === ""){
        // arrojar alerta de error
        console.log("Error");
    }

    else{
        // consultar la API
        console.log("Todo bien");
    }
});