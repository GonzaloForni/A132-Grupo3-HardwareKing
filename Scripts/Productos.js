// Crear un espacio de nombres para nuestra aplicación
listaProductos = [ // Tengo que cargar los datos por codigo
    { id: 1, esDestacado: true, nombre: "AMD RYZEN 5 5600GT", precio: 999999, descripcion: "AMD empezó las ventas Ryzen 5 5600GT 8 de Enero 2024. Es de escritorio procesador en la arquitectura Cezanne priméramente desarrollado para sistemas de oficina. Tiene 6 núcleos y 12 flujos de datos y fabricado por la tecnología 7 nm,la frecuencia máxima es de 4600 MHz, con el miltiplicador desbloqueado. En términos de compatibilidad, este es el procesador para socket AMD Socket AM4 con TDP 65 Watt y la temperatura máxima 95 °C. Es compatible con la memoria DDR4.", stock: 100, imagen: "Img Productos/\AMD RYZEN 5 5600GT 6-Core 3_6GHZ AM4 CPU.jpg"},
    { id: 2, esDestacado: true, nombre: "Intel Core i7", precio: 999999, descripcion: "", stock: 100, imagen: "Img Productos/\Intel Core i7.jpg"},
    { id: 3, esDestacado: true, nombre: "MSI Gaming GeForce RTX 2060", precio: 999999, descripcion: "MSI Gaming GeForce RTX 2060 Super 8GB GDRR6 256-Bit HDMI_DP G-SYNC", stock: 100, imagen: "Img Productos/\MSI Gaming GeForce RTX 2060 Super 8GB GDRR6 256-Bit HDMI_DP G-SYNC.jpg"},
    { id: 4, esDestacado: true, nombre: "Gigabyte GeForce RTX 2080 Ti", precio: 999999, descripcion: "Gigabyte GeForce RTX 2080 Ti 11GB WindForce OC.", stock: 100, imagen: "Img Productos/\Gigabyte GeForce RTX 2080 Ti 11GB WindForce OC.jpg"},
    { id: 5, esDestacado: true, nombre: "Gigabyte Technology B360M AORUS", precio: 999999, descripcion: "Gigabyte Technology B360M AORUS Gaming 3 Socket 1151, Placa Base, Cranberry (GA-B360-3)", stock: 100, imagen: "Img Productos/\Gigabyte Technology B360M AORUS Gaming 3 Socket 1151, Placa Base, Cranberry (GA-B360-3).jpg"},
    { id: 6, esDestacado: true, nombre: "MSI Gaming GeForce RTX 2060", precio: 999999, descripcion: "MSI Gaming GeForce RTX 2060 Super 8GB GDRR6 256-Bit HDMI_DP G-SYNC.", stock: 100, imagen: "Img Productos/\MSI Gaming GeForce RTX 2060 Super 8GB GDRR6 256-Bit HDMI_DP G-SYNC.jpg"},
    { id: 7, esDestacado: true, nombre: "ASUS Z390-A", precio: 999999, descripcion: "Intel LGA 1151 ATX motherboard with AI Overclocking, DDR4 4266 MHz, Dual M.2, HDMI, Intel Optane memory ready, SATA 6Gb/s, USB 3.1 Gen 2 Type-C", stock: 100, imagen: "Img Productos/\PLACAS BASE.jpg"},
    { id: 8, esDestacado: true, nombre: "Intel Pentium", precio: 999999, descripcion: "Procesador Intel® Pentium® 4, 1,60 GHz, caché de 256 K, FSB de 400 MHz", stock: 100, imagen: "Img Productos/\PROCESADORES.jpg"},
    { id: 9, esDestacado: false, nombre: "", precio: 999999, descripcion: "", stock: 100, imagen: ""},
    { id: 10, esDestacado: false, nombre: "", precio: 999999, descripcion: "", stock: 100, imagen: ""},
    { id: 11, esDestacado: false, nombre: "", precio: 999999, descripcion: "", stock: 100, imagen: ""},
    { id: 12, esDestacado: false, nombre: "", precio: 999999, descripcion: "", stock: 100, imagen: ""},
    { id: 13, esDestacado: false, nombre: "", precio: 999999, descripcion: "", stock: 100, imagen: ""},
    { id: 14, esDestacado: false, nombre: "", precio: 999999, descripcion: "", stock: 100, imagen: ""},
    { id: 15, esDestacado: false, nombre: "", precio: 999999, descripcion: "", stock: 100, imagen: ""},
    { id: 16, esDestacado: false, nombre: "", precio: 999999, descripcion: "", stock: 100, imagen: ""},
];

document.addEventListener('DOMContentLoaded', function() {
    console.log('El documento HTML ha sido completamente cargado y analizado');

    CargarListaProductos(listaProductos);

    // Obtener todos los elementos <a> con la clase "card-producto"
    var enlaces = document.querySelectorAll("a.card-producto");

    // Agregar el manejador de eventos a cada elemento <a>
    enlaces.forEach(function(enlace) {
        enlace.addEventListener("click", handleClick);
    });
});

// Función que se llamará cuando se haga clic en un elemento <a>
function handleClick(event) {
    event.preventDefault(); // Prevenir la acción por defecto del enlace
    var elemento = event.currentTarget; // Obtener el elemento que disparó el evento
    var id = elemento.id; // Obtener el id del elemento

    const productoActual = DeterminarProductoPorId(id);
    const jsonString = JSON.stringify(productoActual);
    sessionStorage.setItem('ProductoActual', jsonString);

    window.location.href = 'Producto.html'; // Redirigo al usuario a la pestaña individual de producto
}

function DeterminarProductoPorId(id) {
    var productoEncontrado = null;

    for(var producto of listaProductos) {
        if(producto.id == id) {
            productoEncontrado = producto;
        }
    }

    return productoEncontrado;
}

function CargarListaProductos(listaProductos) {
    // Evaluo si esta aplicado algun filtro
    for(var producto of listaProductos) {
        AgregarNuevoProducto(producto);
    }
}

// <a href="" class="card-producto">
//  <div class="col">
//     <div class="card">
//         <img src="" class="card-img-top" alt="...">
//         <div class="card-body">
//            <h5 class="card-title"></h5>
//             <p class="card-text"></p>
//         </div>
//     </div>
//  </div>
// </a>
function AgregarNuevoProducto(datosProducto) {
    // Crear el enlace <a>
    var enlace = document.createElement("a");
    enlace.href = "Producto.html";
    enlace.className = "card-producto";
    enlace.id = datosProducto.id;
    console.log(enlace.id);

    // Crear el div <div class="col">
    var divCol = document.createElement("div");
    divCol.className = "col";

    // Crear el div <div class="card">
    var divCard = document.createElement("div");
    divCard.className = "card";

    // Crear la imagen <img>
    var imagen = document.createElement("img");
    imagen.src = datosProducto.imagen;
    imagen.className = "card-img-top";
    imagen.alt = datosProducto.nombre;

    // Crear el div <div class="card-body">
    var divCardBody = document.createElement("div");
    divCardBody.className = "card-body";

    // Crear el título <h5>
    var titulo = document.createElement("h5");
    titulo.className = "card-title";
    titulo.innerText = datosProducto.nombre;

    // Crear el párrafo <p>
    var parrafo = document.createElement("p");
    parrafo.className = "card-text";
    parrafo.innerText = datosProducto.precio;

    // Anidar los elementos correctamente
    divCardBody.appendChild(titulo);
    divCardBody.appendChild(parrafo);
    divCard.appendChild(imagen);
    divCard.appendChild(divCardBody);
    divCol.appendChild(divCard);
    enlace.appendChild(divCol);

    // Agregar el nuevo elemento al contenedor
    var contenedor = document.getElementById("contenedor");
  
    contenedor.appendChild(enlace);
}

