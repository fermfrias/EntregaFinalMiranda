const caja = document.getElementById('cajaefecto');
const texto = document.getElementById('texto1');


caja.onmouseover = () => {
    caja.style.backgroundImage = 'url("./Assets/H1.png")';
    texto.style.display = "none";
}

caja.onmouseout = () => {
    caja.style.backgroundImage = 'url("./Assets/h2.png")';
    texto.style.display = "none";
}

const cotizarPastel = () => {
    let pan = document.querySelector("#pan").value;
    let size = document.querySelector("#size").value;
    let extracereza = document.querySelector("#extracereza");
    let extraperla = document.querySelector("#extraperla");

    let divResumen = document.querySelector("#resumen");
    let divResultado = document.querySelector("#resultado");

    let extras = "";

    if (extracereza.checked) {
        extras = "extracereza";
    } else if (extraperla.checked) {
        extras = "extraperla";
    }


    

    if (pan === "" || size === "" || extras === "") {
        mostrarError()
        return;
    }

    let cotizacion = { pan, size, extras };
    document.querySelector("#msj").style.display="none";

    divResumen.style.backgroundColor="#FF5A59";
    divResumen.style.display = "block";

    divResumen.innerHTML = `<div style="width:100px">
    <div style="text-align: center">
                            <img src="./Assets/loading-gif.gif" height:50px> </div>`;

    setTimeout(() => {
        divResumen.style.backgroundColor = "#ffcd59";
        divResumen.innerHTML = `
            <h2> Resumen de Cotización </h2>
            <ul>
                <li> Pan: ${pan} </li>
                <li> Tamaño: ${size} </li>
                <li> Extras: ${extras} </li>
                </ul>
                `;
        let cotizacionFinal = cotizar(cotizacion);
        divResultado.style.display = "block";
        divResultado.className = "divResultado";
        divResultado.innerHTML = `<p class="textoCotizacion"> Tu pastel cuesta $ ${cotizacionFinal} </p>`;
    }, 2000);


}

const mostrarError=(elemento, mensaje)=>{
    Toastify({
        text: "Rellena todos los campos",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #cc104b, #cc104b)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    divError=document.querySelector(elemento);
}

const obtenerExtras = extras => {
    let extrat;
    switch (extras) {
        case "Cerezas": ipan = 50; break;
        case "Perlas": ipan = 100; break;
    }
    return extrat;
}


const tipopan = pan => {
    let ipan;
    switch (pan) {
        case "Red Velvet": ipan = 100; break;
        case "Chocolate": ipan = 300; break;
        case "Vainilla": ipan = 150; break;
        case "Limón": ipan = 50; break;
    }
    return ipan;
}

const calcularTamaño = size => {
    let incremento;
    switch (size) {
        case "Grande": incremento = 200; break;
        case "Mediano": incremento = 150; break;
        case "Chico": incremento = 100; break;
        case "Personal": incremento = 50; break;
    }
    return incremento;

}



const cotizar = (cotizacion) => {
    const { pan, size, } = cotizacion;

    resultado = calcularTamaño(size) + tipopan(pan);
    return resultado;

}





