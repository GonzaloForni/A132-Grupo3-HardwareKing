document.addEventListener('DOMContentLoaded', function() {
    console.log('El documento HTML ha sido completamente cargado y analizado');

    const productoSeleccionado = AveriguarProductoSeleccionado();
    CargarDatosProductoSeleccionado(productoSeleccionado);

    ComprobarPrimerCargaSession();
    console.log(sessionStorage.getItem('listaCarrito'));
});

function ComprobarPrimerCargaSession() {
    var listaJSONActual = sessionStorage.getItem('listaCarrito');
    const listaCarritoActual = JSON.parse(listaJSONActual);

    if(listaCarritoActual == null) {
        const objeto = {
            idProducto: 0,
            cantidad: 0
        }

        sessionStorage.setItem('listaCarrito', JSON.stringify([objeto]));
    }
}

function AveriguarProductoSeleccionado() {
    const retrievedJsonString = sessionStorage.getItem('ProductoActual'); // Recuperar la cadena JSON de localStorage
    const productoSeleccionado = JSON.parse(retrievedJsonString); // Convertir la cadena JSON de nuevo a un objeto JavaScript

    return productoSeleccionado;
}

function CargarDatosProductoSeleccionado(producto) {
    document.getElementById("img-producto").src = producto.imagen; // img id="img-producto"
    document.getElementById("titulo-producto").innerText = producto.nombre; // h3 id="titulo-producto"
    document.getElementById("precio-producto").innerText = producto.precio; // p id="precio-producto
    document.getElementById("cuotas-producto").innerText = "$" + producto.precio/12; // p id="cuotas-producto
    document.getElementById("descripcion-producto").innerText = producto.descripcion; // div id="descripcion-producto
}

function AgregarProductoAlCarrito() { // Una vez que el usuario clickea en agregar al carrito
    var listaJSONActual = sessionStorage.getItem('listaCarrito');
    const listaCarritoActual = JSON.parse(listaJSONActual);
    var comprobanteProducto = false;
    productoSeleccionado = AveriguarProductoSeleccionado();

    // Busco en la lista de objetos si alguno ya tiene el mismo id, en ese caso seria incrementar la cantidad
    for(var producto of listaCarritoActual) {
        if(producto.idProducto == productoSeleccionado.id) { 
            producto.cantidad++;
            comprobanteProducto = true;
            break;
        }
    }

    if(comprobanteProducto == false) { // Quiere decir que el producto que selecciono el usuario no estaba en la lista actual
        const nuevoProducto = {
            idProducto: productoSeleccionado.id,
            cantidad: 1
        }
        
        listaCarritoActual.push(nuevoProducto);
    }

    var listaJSONNueva = JSON.stringify(listaCarritoActual);
    sessionStorage.setItem('listaCarrito', listaJSONNueva);

    alert("Se agrego el producto al carrito!!!");
    window.location.href = 'Carrito.html'; // Redirigo al usuario a la pestaña del carrito de compras
}