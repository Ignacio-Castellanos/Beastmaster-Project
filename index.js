let carrito = JSON.parse(localStorage.getItem("carritoFinal")) || [];

let productos = document.getElementById("productos");
let carrito_pagina = document.getElementById("carrito");

function printProduct(){
listaDiscos.forEach((producto) => {
    let container = document.createElement("div");
    container.innerHTML = `
    <div class="col">
    <div class="card" style="width: 18rem;">
        <img src="${producto.image}" class="card-img-top" alt="...">  
            <div class="card-body">
                <h5 class="card-title">${producto.nombreArtista}</h5>
                <p class="card-text">${producto.tituloDisco}</p>
                <p class="card-text">${producto.añoLanzamiento}</p>
                <p class="card-text">${producto.precio}</p>
                <button id="comprar${producto.id}" class="btn btn-primary">Añadir al carrito</button>
            </div>            
    </div>
    </div>
    `;
    productos.append(container);
});
}
printProduct();

function addcarrito(id){
    // let idArt = id.target.dataset.id;
    let addDisc = listaDiscos.map(disc => disc.nombreArtista).indexOf(id);
    carrito.push(listaDiscos[addDisc]);
    dibujarCarrito(id);
    let carrito2 = JSON.stringify(carrito);
    localStorage.setItem("carritoFinal", carrito2);
    location.reload();
}

let botonadd = document.querySelector('#comprar');
botonadd.forEach(boton => boton.addEventListener("click", addcarrito));
    
function dibujarCarrito(id) {
    carrito.forEach((producto) => {
        let container2 = document.createElement("div");
        container2.innerHTML = `               
                <div>
                    <h5>${producto.nombreArtista}</h5>
                    <h5>${producto.tituloDisco}</h5>                    
                    <h5>${producto.precio}</h5>
                    <button id="botonBorrarProducto" data-id="${producto.nombreArtista}">Borrar</button>
                </div>            
        `;
        carrito_pagina.append(container2);
    });
}

dibujarCarrito(id);


function sumCart(carrito) {    
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += parseFloat(carrito[i].precio);
    }
    return total + "€";

}
sumCart(carrito);

document.getElementById("total").innerHTML = "Total cesta: " + sumCart(carrito);
console.info(sumCart(carrito));


function eliminarProducto(id) {
    // const nombre = event.target.dataset.id;    
    carrito = carrito.filter(disc => disc.nombreArtista !== nombre);
    localStorage.setItem("carritoFinal", JSON.stringify(carrito));
    location.reload();
}

const botonBorrar = document.querySelector('#botonBorrarProducto');
botonBorrar.forEach(boton => boton.addEventListener("click", eliminarProducto));

const eliminarTodo = () => {
    localStorage.clear();
    location.reload();
}

