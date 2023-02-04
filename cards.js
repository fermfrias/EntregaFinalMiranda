const contenedor = document.querySelector(".productos");
const productos = [
    { id: 1, nombre: "Fernanda", descripcion: "pastel vegano de zanahoria", precio: 1200, img: "./Assets/Cards-08.png" },
    { id: 1, nombre: "Pancho", descripcion: "pastel individual de chocolate con cereza", precio: 200, img: "./Assets/Cards-07.png" },
    { id: 1, nombre: "Soledad", descripcion: "Tarta de Higo", precio: 400, img: "./Assets/Cards-06.png" },
    { id: 1, nombre: "Sam", descripcion: "Rosca de manzana", precio: 800, img: "./Assets/Cards-05.png" },
    { id: 1, nombre: "Julia", descripcion: "Tarta pablova", precio: 1200, img: "./Assets/Cards-04.png" },
    { id: 1, nombre: "Fidel", descripcion: "Pay de limón", precio: 1200, img: "./Assets/Cards-03.png" }
];

function crearHTML(array) {
    let html;
    contenedor.innerHTML = "";
    for (const productos of array) {
        html =
            `<div class="">
                <div class="card">
                    <div class="card-img-top";>
                        <img src="./${productos.img}"/>
                        <span class="card-title">${productos.nombre.toUpperCase()}</span>
                    </div>
                    <div class="card-text">
                        <p>$${productos.precio}</p>
                        <p>${productos.descripcion}</p>
                    </div>
                    <div class="card-action">
                        <button class="btn" id="${productos.id}">comprar</button>
                    </div>
                </div>
            </div>`;
            contenedor.innerHTML += html;
    }

}

crearHTML(productos)