let carrito = JSON.parse(localStorage.getItem("carritoFinal")) || [];

let productos = document.getElementById("productos");
let carrito_pagina = document.getElementById("carrito");

function printProduct() {
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
                <button id="comprar" data-id="${producto.id}" class="btn btn-primary">Añadir al carrito</button>
            </div>            
    </div>
    </div>
    `;
        productos.append(container);
    });
}
printProduct();

function addcarrito(event) {
    let idArt = event.target.dataset.id;
    // let addDisc = listaDiscos.map(disc => disc.nombreArtista).indexOf(idArt);
    let existe = listaDiscos.find(Object => Object.id == idArt);
    if (carrito.includes(existe)) {
        existe.cantidad++;
    }

    else {
        carrito.push(existe);
    }
    let carrito2 = JSON.stringify(carrito);
    localStorage.setItem("carritoFinal", carrito2);
    dibujarCarrito();
    sumCart(carrito);
    location.reload();

    
}

//carrito.push(listaDiscos[addDisc]);
// //dibujarCarrito(idArt);

//location.reload();
//console.info(carrito);



let botonadd = document.querySelectorAll('#comprar');
botonadd.forEach(boton => boton.addEventListener("click", addcarrito));



function dibujarCarrito() {
    carrito_pagina.innerHTML = '';
    carrito.forEach((producto) => {
        let container2 = document.createElement("div"); 
        container2.innerHTML = `
                <div>
                    <h5>${producto.nombreArtista}</h5>
                    <h5>${producto.tituloDisco}</h5>                    
                    <h5>${producto.precio}</h5>
                    <h5>${producto.cantidad}</h5>
                    <button id="borrarProducto" data-id="${producto.id}">Borrar</button>
                </div>               
        `;

        carrito_pagina.appendChild(container2);
    });



let botonBorrar = document.querySelectorAll("#borrarProducto");
botonBorrar.forEach(x => x.addEventListener("click", eliminarProducto));


}


function sumCart(carrito) {

    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += parseFloat(carrito[i].precio) * parseFloat(carrito[i].cantidad);
    }
    return total + "€";
    
}

sumCart(carrito);
document.getElementById("total").innerHTML = sumCart(carrito);






function eliminarProducto(event) {
    //console.info(event);
    const nombre = event.target.dataset.id;
    carrito = carrito.filter(disc => disc.id != nombre);
    localStorage.setItem("carritoFinal", JSON.stringify(carrito));
    dibujarCarrito(carrito);
    

}



function eliminarTodo() {
    localStorage.clear();
    location.reload();
    // carrito = [];
    // console.info(carrito);
}

dibujarCarrito();
// function actualizarCarrito(event) {
//     const repe = event.target.dataset.id;
//     let existe = carrito.find(disc => disc.nombreArtista === repe);
//     if (existe) {
//         existe.cantidad++;
//     }
//     else {
//         productos.cantidad = 1;
//         carrito.push(productos);
//     }
// }
// localStorage.setItem(carrito, JSON.stringify(carrito));
// const botonComprar = document.querySelectorAll('#comprar');
// botonComprar.forEach(boton => boton.addEventListener("click", actualizarCarrito));


