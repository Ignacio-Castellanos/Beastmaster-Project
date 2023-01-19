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
                <button id="comprar" data-id="${producto.nombreArtista}" class="btn btn-primary">Añadir al carrito</button>
            </div>            
    </div>
    </div>
    `;
    productos.append(container);
});
}
printProduct();

function addcarrito(event){
    let idArt = event.target.dataset.id;
    let addDisc = listaDiscos.map(disc => disc.nombreArtista).indexOf(idArt);
    carrito.push(listaDiscos[addDisc]);
    dibujarCarrito();
    let carrito2 = JSON.stringify(carrito);
    localStorage.setItem("carritoFinal", carrito2);
    location.reload();

}

let botonadd = document.querySelectorAll('#comprar');
botonadd.forEach(boton => boton.addEventListener("click", addcarrito));

    // comprar.addEventListener("click", () => {
    //     carrito.push({
    //         nombreArtista: producto.nombreArtista,
    //         tituloDisco: producto.tituloDisco,
    //         añoLanzamiento: producto.añoLanzamiento,
    //         precio: producto.precio,
    //     });
        // console.info(carrito);
        let carrito2 = JSON.stringify(carrito);
        localStorage.setItem("carritoFinal", carrito2);
        carrito2 = localStorage.getItem("carritoFinal");

       // location.reload()
    //})


function dibujarCarrito() {
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

dibujarCarrito();


function sumCart(carrito) {
    const euro = "€"
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += parseFloat(carrito[i].precio);
    }
    return total + "€";

}
sumCart(carrito);

document.getElementById("total").innerHTML = "totalcesta" + sumCart(carrito);
console.info(sumCart(carrito));


function eliminarProducto(event) {
    const nombre = event.target.dataset.id;
    carrito = carrito.filter(disc => disc.nombreArtista !== nombre);
    localStorage.setItem("carritoFinal", JSON.stringify(carrito));
    location.reload();
}

const botonBorrar = document.querySelectorAll('#botonBorrarProducto');
botonBorrar.forEach(boton => boton.addEventListener("click", eliminarProducto));