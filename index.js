let carrito = JSON.parse(localStorage.getItem("carritoFinal")) || [];

console.log(carrito);

let productos = document.getElementById("productos");
let carrito_pagina = document.getElementById("carrito");


listaDiscos.forEach((producto) => {
    let container = document.createElement("div");
    container.innerHTML = `
    <div>
        <img src="${producto.image}" width=10% alt="...">   
            <div>
                <h5 class="">${producto.nombreArtista}</h5>
                <h5 class="">${producto.tituloDisco}</h5>
                <h5 class="">${producto.añoLanzamiento}</h5>
                <h5 class="">${producto.precio}</h5>
            </div>            
    </div>
    `;
    carrito_pagina.append(container);


productos.append(container);

let comprar = document.createElement("div");
comprar.innerHTML = `
    <button id="comprar">Añadir al carrito</button>
`;
container.append(comprar);

comprar.addEventListener("click", () => {
    carrito.push({
        nombreArtista: producto.nombreArtista,
        tituloDisco: producto.tituloDisco,
        añoLanzamiento: producto.añoLanzamiento,
        precio: producto.precio,
    });
    let carrito2 = JSON.stringify(carrito);
    
    localStorage.setItem("carritoFinal", carrito2);

    carrito2 = localStorage.getItem("carritoFinal");
    
    location.reload()   
     
})

});

function dibujarCarrito () {
    carrito.forEach((producto) => {
        let container2 = document.createElement("div");
        container2.innerHTML = `                               
                <div>                    
                    <h5 class="">${producto.nombreArtista}</h5>
                    <h5 class="">${producto.tituloDisco}</h5>                    
                    <h5 class="">${producto.precio}</h5>
                </div>        
        `;
        carrito_pagina.append(container2);
    });

}

dibujarCarrito ()

//const euro = "€";

function sumCart(carrito) {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
      total += parseFloat(carrito[i].precio);
    }
    return total + "€";
  }

sumCart(carrito);
document.getElementById("total").innerHTML = "total + cesta" sumCart(carrito);
console.log(sumCart(carrito));
  

