listaProductos = [ // Tengo que cargar los datos por codigo
    { id: 1, esDestacado: true, nombre: "AMD RYZEN 5 5600GT", precio: 183299, descripcion: "AMD empezó las ventas Ryzen 5 5600GT 8 de Enero 2024. Es de escritorio procesador en la arquitectura Cezanne priméramente desarrollado para sistemas de oficina. Tiene 6 núcleos y 12 flujos de datos y fabricado por la tecnología 7 nm,la frecuencia máxima es de 4600 MHz, con el miltiplicador desbloqueado. En términos de compatibilidad, este es el procesador para socket AMD Socket AM4 con TDP 65 Watt y la temperatura máxima 95 °C. Es compatible con la memoria DDR4.", stock: 100, imagen: "Img Productos/\AMD RYZEN 5 5600GT 6-Core 3_6GHZ AM4 CPU.jpg"},
    { id: 2, esDestacado: true, nombre: "Intel Core i7", precio: 601500, descripcion: "", stock: 100, imagen: "Img Productos/\Intel Core i7.jpg"},
    { id: 3, esDestacado: false, nombre: "MSI Gaming GeForce RTX 2060", precio: 489628, descripcion: "MSI Gaming GeForce RTX 2060 Super 8GB GDRR6 256-Bit HDMI_DP G-SYNC", stock: 100, imagen: "Img Productos/\MSI Gaming GeForce RTX 2060 Super 8GB GDRR6 256-Bit HDMI_DP G-SYNC.jpg"},
    { id: 4, esDestacado: true, nombre: "Gigabyte GeForce RTX 2080 Ti", precio: 633628, descripcion: "Gigabyte GeForce RTX 2080 Ti 11GB WindForce OC.", stock: 100, imagen: "Img Productos/\Gigabyte GeForce RTX 2080 Ti 11GB WindForce OC.jpg"},
    { id: 5, esDestacado: true, nombre: "Gigabyte Technology B360M AORUS", precio: 93309, descripcion: "Gigabyte Technology B360M AORUS Gaming 3 Socket 1151, Placa Base, Cranberry (GA-B360-3)", stock: 100, imagen: "Img Productos/\Gigabyte Technology B360M AORUS Gaming 3 Socket 1151, Placa Base, Cranberry (GA-B360-3).jpg"},
    { id: 6, esDestacado: false, nombre: "ASUS Z390-A", precio: 137289, descripcion: "Intel LGA 1151 ATX motherboard with AI Overclocking, DDR4 4266 MHz, Dual M.2, HDMI, Intel Optane memory ready, SATA 6Gb/s, USB 3.1 Gen 2 Type-C", stock: 100, imagen: "Img Productos/\PLACAS BASE.jpg"},
    { id: 7, esDestacado: false, nombre: "Intel Pentium", precio: 118199, descripcion: "Procesador Intel® Pentium® 4, 1,60 GHz, caché de 256 K, FSB de 400 MHz", stock: 100, imagen: "Img Productos/\PROCESADORES.jpg"},
    { id: 8, esDestacado: false, nombre: "MONITOR CURVO 27 SAMSUNG LC27F390FHLX LED FHD FREESYNC VGA HDMI", precio: 279900, descripcion: "Descubri una verdadera experiencia inmersiva con el monitor curvo de Samsung. Con una pantalla de 1.800R, disfrutá de un campo de visión parecido a una pantalla iMax, una gran curva con radio de 1.800 mm que crea un campo visual más amplio, mejora la profundidad y minimiza la distracción para que te concentres en tu contenido. No importa si es una película en línea, tu serie favorita de TV o un juego de carreras. La gran curva de Samsung te pondrá en el centro de tu contenido multimedia.", stock: 100, imagen: "Img Productos/\monitor-curvo-27-samsung.jpg"},
    { id: 9, esDestacado: true, nombre: "GABINETE COOLERMASTER MASTERBOX TD500 MESH V2 ARGB WHITE", precio: 150680, descripcion: "Model Number MCB-D500D-WGNN-S00 Series MasterBox Series Size Mid Tower Available Color(s) White Materials Steel, Plastic, Tempered Glass, Mesh Dimensions (L x W x H) 493 x 217 x 469mm (incl. Protrusions), 429.5 x 205x 447mm (excl. Protrusions) Weight 6.95 kg Motherboard Support Mini ITX, Micro ATX, ATX, SSI CEB, E-ATX*, (*support for up to 12 x 10.7, will limit cable management features), 1x 3.5mm Mic Jack, 1x ARGB/PWM Hub (may depend on region and model) Pre-installed Fans - Top N/A Pre-installed Fans - Front 3x 120mm 650~1800RPM SickleFlow PWM ARGB Pre-installed Fans - CPU Cooler 165mm/6.49 Clearance - PSU 180mm/7.08, 295mm/11.61 (w/ HDD cage removed)", stock: 100, imagen: "Img Productos/\gabinete-coolermaster-masterbox-white.jpg"},
    { id: 10, esDestacado: true, nombre: "WATERCOOLER 240MM CORSAIR H100 RGB", precio: 145409, descripcion: "Product Length 277mm Product Width 180mm Product Height 120mm Lighting RGB Number of Fans 2 Cold Plate Material Copper Radiator Material Aluminum Cooling Socket Support Intel 1700, Intel 1200, Intel 1150, Intel 1151, Intel 1156, AMD AM5, AMD AM4 Radiator Size 240mm iCUE Software Yes PWM Yes Weight 1.85 Fan Model SP RGB ELITE Series", stock: 100, imagen: "Img Productos/\watercooler-240mm-corsair-h100-rgb-0.jpg"},
    { id: 11, esDestacado: false, nombre: "MICROFONO HYPERX QUADCAST USB BLACK-RED PC PS4 STREAMING 4P5P6AA", precio: 195529, descripcion: "Micrófono Sensibilidad de micrófono -36 dB Micrófono, distorción armónica total (THD) 0,05% Micrófono, impedancia de salida 32 O Micrófono, relación señal/ruido 90 dB Puertos e Interfaces Tecnología de conectividad Alámbrico Interfaz del dispositivo USB Puerto USB Si", stock: 100, imagen: "Img Productos/\microfono-hyperx-quadcast-usb-blackred.jpg"},
    { id: 12, esDestacado: false, nombre: "MEMORIA 16GB DDR4 3200 KINGSTON FURY BEAST WHITE RGB", precio: 64339, descripcion: "Kingston FURY™ Beast DDR4 RGB Special Edition mejora tanto el rendimiento como la estética, con velocidades de hasta 3200 MT/s y 3600 MT/s, un exclusivo disipador térmico blanco y una atractiva iluminación RGB. Personaliza los efectos luminosos RGB con el software Kingston FURY CTRL™ y refuerza la atractiva estética con la patentada Infrared Sync Technology™. Disponible en latencias desde CL16 a 18, capacidades de módulo individual de 8 GB y 16 GB, y capacidades de kit de 16 GB y 32 GB. Exhaustivamente comprobadas y respaldadas por una garantía vitalicia, te resulta fácil actualizarlas en tu sistema basado en Intel® o en AMD. Con Kingston FURY™ Beast DDR4 RGB Special Edition, tú y tu sistema podrán diferenciarse del montón.", stock: 100, imagen: "Img Productos/\memoria-16gb-ddr4-3200-kingston-fury-beast-white.jpg"},
    { id: 13, esDestacado: false, nombre: "MICRO INTEL CORE I9 14900 C/VIDEO C/COOLER S1700", precio: 932630, descripcion: "El procesador Intel Core  i9-14900 Socket 1700 presenta la última arquitectura híbrida de rendimiento de Intel®, optimizada para gaming, creación de contenido y productividad. Su plataforma innovadora ofrece flexibilidad y potencia, respaldada por un conjunto robusto de herramientas de ajuste y overclocking para potenciar el rendimiento de la CPU. Con compatibilidad con los chipsets de la serie 700 de Intel® y retrocompatibilidad con los chipsets de la serie 600 de Intel®, este procesador proporciona acceso a funciones clave. Ya sea trabajando, transmitiendo, jugando o creando, los procesadores Intel® Core™ para desktop ofrecen una experiencia inmersiva incomparable.", stock: 100, imagen: "Img Productos/\micro-intel-core-i9-14900-cvideo-ccooler-s1700-0.jpg"},
    { id: 14, esDestacado: false, nombre: "GABINETE THERMALTAKE DIVIDER 170 TG 2 FAN ARGB PWM SNOW WHITE", precio: 131210, descripcion: "P/N CA-1S4-00S6WN-00 La serie Divider TIPO DE CAJA Micro Case DIMENSIONES (AL x AN x PR) 426 x 210 x 408.5 mm PESO NETO 5.26 kg PANEL LATERAL 3mm Tempered Glass x 1 Color White Material SPCC SISTEMA DE REFRIGERACIÓN Front(intake): 120 x 120 x 25 mm ARGB PWM fan (1500rpm, 27.2 dBA) x 2 BAHÍAS DE EXPANSIÓN 2 x 3.5, 2 x 2.5 or 4 x 2.5 RANURAS DE EXPANSIÓN 4 PLACAS BASE 6.7 x 6.7 (Mini ITX), 9.6 x 9.6 (Micro ATX) PUERTOS E/S USB 3.0 x 2, USB 2.0 x 1, HD Audio x 1 FUENTE DE ALIMENTACIÓN Standard PS2 PSU (optional) COMPATIBILIDAD VENTILADORES Front: 3 x 120mm, 2 x 120mm, 1 x 120mm 2 x 140mm, 1 x 140mm Top: 2 x 120mm, 1 x 120mm 2 x 140mm, 1 x 140mm Rear: 1 x 120mm COMPATIBILIDAD RADIADORES Front: 1 x 240mm, 1 x 120mm 1 x 280mm, 1 x 140mm Top: 1 x 240mm, 1 x 120mm 1 x 140mm Rear: 1 x 120mm", stock: 100, imagen: "Img Productos/\gabinete-thermaltakedivider170tg-2-fan-argb-pwm-snow-whit-0.jpg"},
    { id: 15, esDestacado: true, nombre: "MEMORIA 8GB DDR4 3200 CORSAIR VENGEANCE RGB PRO", precio: 38970, descripcion: "Nombre de la marca:CORSAIR Paquete:Sí Aleta de enfriamiento:No Memory Frequency:3200 MHz Aplicación:Escritorio Función:NON-ECCEl valor de CL:16 Tipo de interfaz:288 pines Combination Form:Individual Número de modelo: Tipo:DDR4 Voltaje de la:1.35 V Frecuencia:3200MHz Latency:16-20-20-38", stock: 100, imagen: "Img Productos/\memoria-8gb-ddr4-3200-corsair-vengeance-rgb-pro-0.jpg"},
    { id: 16, esDestacado: true, nombre: "COMBO MICRO INTEL I5 11400 + H510 + 8GB", precio: 298689, descripcion: "1 | MICRO INTEL CORE I5 11400 1 | MOTHER H510 1 | MEMORIA 8GB DDR4 2666MHZ", stock: 100, imagen: "Img Productos/\combo-micro-intel-i5-11400--h510--8gb-0.jpg"},
    { id: 17, esDestacado: false, nombre: "GABINETE GAMEMAX MINI ABYSS H608 FAN RGB M-ATX", precio: 98480, descripcion: "Form Factor (Midi, Micro, Mini ITX, Full) Micro-ATX, Mini ITX Chassis SPCC 0.6mm, Black painting interior PSU Form Factor Bottom/ATX M/B Form Factor M-ATX/ITX Front Panel ABS,Tempered Glass Top Panel Metal cover Branding Box GameMax Unit 1 Side Panel Left Tempered Glass Right Metal cover External Drive Bay(s) 5.25 (ODD) *0 3.5 *0 Internal Drive Bay(s) 3.5 (HDD) *2 2.5 (SSD) *2 I/O Buttons *4 USB3.0(USB3.1 GEN1) Port(s) *2 HD Audio Support *1 Fan Controller *1 PWM RGB Controller *1 Rainbow Controller (ARGB) Controller max. fans *5 RGB Controller max. LED strips *2 Cooling Fan Support Front 3x120mm(Fan optional) Top 2x120mm(Fan optional) Rear 1x120mm (Included) (FN-12Rainbow-M) Water Cooling Support (Radiator Size) Front 120mm*1, 240mm*1 Top 120mm*1, 240mm*1 Rear 120mm*1 Dust Cover Bottom and top cover with dust filter Slots *4 Carton & Logo GAMEMAX Dimensions Chassis (L)350*(W)193*(H)390mm Full Case (inc Fascia) (L)403*(W)193*(H)415mm Carton (L)493*(W)287*(H)487mm Net Weight (Kg) 3.6 kgs Gross Weight (Kg) 4.4 kgs VGA Card Length 340mm CPU Cooler Height 155mm Cable Management Depth 19mm", stock: 100, imagen: "Img Productos/\gabinete-gamemax-mini-abyss-h608-fan-rgb-matx-0.jpg"},
    { id: 18, esDestacado: false, nombre: "MOUSEPAD LOGITECH G440 GAMING 943-000098", precio: 20959, descripcion: "FRICCIÓN DE BAJA SUPERFICIE Inercia derrotada G440 ofrece fricción superficial ultra baja, ofreciendo a los jugadores de alta DPI una superficie ideal para movimientos sutiles de la mano y gestos rápidos del ratón. La superficie de polietileno permite que el ratón se mueva incluso al aplicar una fuerza mínima, minimizando los errores de sobrecompensación al arrancar o parar. TEXTURA DE SUPERFICIE CONSISTENTE Rendimiento de borde a borde Los patrones y diseños pesados pueden interferir con el rendimiento del sensor. G440 presenta una textura de superficie limpia y consistente. Esto proporciona mejores sensores e imágenes, para traducir el movimiento del ratón en el movimiento del cursor, una mejora sobre la mesa inconsistente o sucia y superficies de escritorio. ESPECIFICACIONES TÉCNICAS Altura: 11,03 en (280 mm) Anchura: 13,39 en (340 mm) Profundidad: . 13 in (3 mm) Peso: 8.07 oz (229 g, aproximado)", stock: 100, imagen: "Img Productos/\mousepad-logitech-g440-gaming-943000098-0.jpg"}
];

document.addEventListener('DOMContentLoaded', function() {
    console.log('El documento HTML ha sido completamente cargado y analizado');

    console.log(sessionStorage.getItem('listaCarrito'));
    CargarProductosCarrito();
    MostrarPrecioBrutoProductos();
    cambioSeleccion();
    ActualizarPrecioFinal();

    var radios = document.getElementsByName('optiones-envio'); // Obtengo todos los elementos de radio por su nombre de grupo
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
    var precioBruto = CalcularPrecioBrutoProductos();
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

    ModificarCantidadAComprar(inputId, inputElement.value);
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
