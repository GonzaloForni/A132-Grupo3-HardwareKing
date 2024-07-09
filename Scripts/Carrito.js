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

    console.log(sessionStorage.getItem('listaCarrito'));
    CargarProductosCarrito();
    MostrarPrecioBrutoProductos();
    cambioSeleccion();
    ActualizarPrecioFinal();

    let radios = document.getElementsByName('optiones-envio'); // Obtengo todos los elementos de radio por su nombre de grupo
    radios.forEach(function(radio) { // Agrego un evento de cambio a cada radio
        radio.addEventListener('change', cambioSeleccion);
    });
});

function CargarProductosCarrito() {
    // Tengo que generar la lista de productos que estan agregados al carrito
    const retrievedJsonString = sessionStorage.getItem('listaCarrito');
    const listaAux = JSON.parse(retrievedJsonString); // Convertir la cadena JSON de nuevo a un objeto JavaScript

    for(var aux of listaAux) {
        for(var producto of listaProductos) {
            if(producto.id == aux.idProducto) {
                GenerarCardProducto(producto, aux.cantidad);
                break;
            }
        }
    }
}

// <div class="card mb-3 card-carrito">
//     <div class="row g-0">
//         <div class="col-6 col-md-4">
//            <img src="" class="img-fluid rounded-start img-carrito" alt="...">
//        </div>
//        <div class="col-6 col-md-4">
//            <div class="card-body">
//                <h5 class="card-title"></h5>
//            </div>
//        </div>
//        <div class="col-6 col-md-4">
//            <div class="card-body">
//                <div class="number-control cantidad-seleccionada">
//                    <input type="number" name="number" class="number-quantity selector-cant">
//                </div>
//            </div>
//            <div class="btn-eliminar">
//                <button class="delete-button">
//                    <svg class="delete-svgIcon" viewBox="0 0 448 512">
//                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
//                    </svg>
//                </button>
//            </div>
//         </div>
//     </div>
// </div>
function GenerarCardProducto(productoActual, cantidadAComprar) {
    // Seleccionar el contenedor existente
    var containerProductos = document.getElementById('container-productos');

    // Crear la tarjeta
    var card = document.createElement('div');
    card.className = 'card mb-3 card-carrito';

    // Crear la fila dentro de la tarjeta
    var row = document.createElement('div');
    row.className = 'row g-0';

    // Crear la primera columna
    var col1 = document.createElement('div');
    col1.className = 'col-6 col-md-4';

    var img = document.createElement('img');
    img.src = productoActual.imagen;
    img.className = 'img-fluid rounded-start img-carrito';
    img.alt = productoActual.nombre;

    col1.appendChild(img);

    // Crear la segunda columna
    var col2 = document.createElement('div');
    col2.className = 'col-6 col-md-4';

    var cardBody1 = document.createElement('div');
    cardBody1.className = 'card-body';

    var h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.textContent = productoActual.nombre;

    cardBody1.appendChild(h5);
    col2.appendChild(cardBody1);

    // Crear la tercera columna
    var col3 = document.createElement('div');
    col3.className = 'col-6 col-md-4';

    var cardBody2 = document.createElement('div');
    cardBody2.className = 'card-body';

    var numberControl = document.createElement('div');
    numberControl.className = 'number-control cantidad-seleccionada';

    var input = document.createElement('input');
    input.type = 'number';
    input.name = 'number';
    input.className = 'number-quantity selector-cant';
    input.id = productoActual.id; // Asigno un id
    input.value = cantidadAComprar;

    numberControl.appendChild(input);
    cardBody2.appendChild(numberControl);
    col3.appendChild(cardBody2);

    // Crear el botón de eliminar
    var btnEliminar = document.createElement('div');
    btnEliminar.className = 'btn-eliminar';

    var button = document.createElement('button');
    button.className = 'delete-button';
    button.id = productoActual.id;

    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'delete-svgIcon');
    svg.setAttribute('viewBox', '0 0 448 512');

    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z');

    svg.appendChild(path);
    button.appendChild(svg);
    btnEliminar.appendChild(button);

    col3.appendChild(btnEliminar);

    // Agregar las columnas a la fila
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);

    // Agregar la fila a la tarjeta
    card.appendChild(row);

    // Agregar el controlador de eventos al input
    input.addEventListener('input', handleInputChange); // Se ejecuta en cada cambio de valor
    // Agregar el controlador de eventos al botón de eliminar
    button.addEventListener('click', handleDeleteButtonClick);

    // Agregar la tarjeta al contenedor principal
    containerProductos.appendChild(card);
}

function CalcularPrecioBrutoProductos() {
    // Tengo que generar la lista de productos que estan agregados al carrito
    const retrievedJsonString = sessionStorage.getItem('listaCarrito');
    const listaAux = JSON.parse(retrievedJsonString); // Convertir la cadena JSON de nuevo a un objeto JavaScript
    var precioBrutoCalculado = 0;

    for(var aux of listaAux) {
        for(var producto of listaProductos) {
            if(producto.id == aux.idProducto) {
                precioBrutoCalculado += (producto.precio * aux.cantidad);
                break;
            }
        }
    }

    return precioBrutoCalculado;
}

function MostrarPrecioBrutoProductos() {
    precioBruto = CalcularPrecioBrutoProductos();
    document.getElementById("precio-bruto").innerText = "$" + precioBruto;
}

function ModificarCantidadAComprar(idProducto, nuevaCantidad) {
    const retrievedJsonString = sessionStorage.getItem('listaCarrito');
    const listaAux = JSON.parse(retrievedJsonString); // Convertir la cadena JSON de nuevo a un objeto JavaScript

    for(var aux of listaAux) {
        if(idProducto == aux.idProducto) {
            aux.cantidad = nuevaCantidad;
            break;
        }
    }

    var listaJSONNueva = JSON.stringify(listaAux);
    sessionStorage.setItem('listaCarrito', listaJSONNueva);
}

// Función que se ejecutará cuando cambie el valor del input
function handleInputChange(event) {
    var inputElement = event.target;
    var newValue = inputElement.value;
    var inputId = inputElement.id;

    if(newValue < 1 || newValue > 99) {
        inputElement.value = 1;
    }

    ModificarCantidadAComprar(inputId, newValue);
    MostrarPrecioBrutoProductos();
    ActualizarPrecioFinal();
}

function EliminarProductoDelCarrito(id) {
    const retrievedJsonString = sessionStorage.getItem('listaCarrito');
    const listaAux = JSON.parse(retrievedJsonString); // Convertir la cadena JSON de nuevo a un objeto JavaScript
    
    for(var index = 0; index < listaAux.length; index++) {
        if(id == listaAux[index].idProducto) {
            if (index !== -1) {
                listaAux.splice(index, 1);
            }
            break;
        }
    }

    var listaJSONNueva = JSON.stringify(listaAux);
    sessionStorage.setItem('listaCarrito', listaJSONNueva);
}

// Función que se ejecutará cuando se haga clic en el botón de eliminar
function handleDeleteButtonClick(event) {
    var buttonElement = event.currentTarget;
    var cardElement = buttonElement.closest('.card');
    var idProducto = buttonElement.id;
    EliminarProductoDelCarrito(idProducto);
    cardElement.remove(); // Eliminar la tarjeta del DOM
    MostrarPrecioBrutoProductos();
    ActualizarPrecioFinal();
}

function CalcularPrecioEnvio() {
    var radios = document.getElementsByName('optiones-envio');
    var precioEnvioCalculado = 0;

    radios.forEach(function(radio) {
        if (radio.checked) {
            switch (radio.id) {
                case "option1": // Domicilio
                    precioEnvioCalculado = 5000;
                    break;
                case "option2": // Sucursal
                    precioEnvioCalculado = 3000;
                    break;
                case "option3": // Mensajeria
                    precioEnvioCalculado = 7000;
                    break;
            }
        }
    });

    return precioEnvioCalculado;
}

// Función que se ejecutará cuando cambie la selección
function cambioSeleccion() {
    var precioEnvio = 0;

    precioEnvio = CalcularPrecioEnvio();
    document.getElementById("precio-envio").innerText = "$" + precioEnvio;
    ActualizarPrecioFinal();
}

function ActualizarPrecioFinal() {
    var precioFinal = 0;

    precioFinal += CalcularPrecioBrutoProductos();
    precioFinal += CalcularPrecioEnvio();

    document.getElementById("precio-final").innerText = "$" + precioFinal;
}

// Sexto
    // Debo pensar si llego hasta ahi el proceso de compra
        // Creo que deberia ser asi, sino me complico con algo que no me suma nada, que cuando clickee le muestre un alert y fue
        // Como maximo agregaria una especie de pestaña en la que se ve una "Factura" donde muestro los datos de la compra

/* -> ToDoList
    · Programar JS de seccion productos destacados para que se carguen dinamicamente
    · Agregar API de envio de gmail y comprobar funcionamiento
    · Agregar datos de 8 productos mas para rellenar el contenido correctamente
    · Programar OrdenarPor de Productos
    · Buscar alternativa para los alert que se muestran
    · Limpiar console.logs de la pagina
    · Crear html de Sobre Nosotros o sacar la opcion del footer (Si no tengo tiempo de recontra sobra lo saco porque no me lo pidio nadie)
*/


