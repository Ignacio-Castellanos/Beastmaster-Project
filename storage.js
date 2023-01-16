
 const saveItem = () => {
     let item = document.getElementById("item").value;    
     localStorage.setItem("disco", item);
     console.info("Item creado en el localStorage");
 }

 const getItem = () => {
     let itemDisco = localStorage.getItem("disco");
     if(itemDisco) {
         console.info(`Item traido del localStorage: ${itemDisco}`);        
     } else {
         console.info("No hay item en localStorage");
     }
 }

 const deleteItem = () => {
     localStorage.removeItem("disco");
     console.info("Has borrado un item del localStorage");
 }

 const deleteAll = () => {
     localStorage.clear();
     location.reload()
     console.info("Has borrado todos los items del localStorage");
 }

