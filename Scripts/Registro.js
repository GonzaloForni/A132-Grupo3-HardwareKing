function ControllerCrearCuenta() {
    // Valido los datos
    if(ComprobarDatosIngresados()) {
        // Tomo los datos de los textbox
        const datosUsuario = LeerDatosRegistro();
        
        // Convierto el objeto a una cadena JSON
        const jsonString = JSON.stringify(datosUsuario);
        console.log(jsonString);
        
        localStorage.setItem(datosUsuario.correoElectronico, jsonString); // Guardo los datos en el localStorage
        sessionStorage.setItem(datosUsuario.correoElectronico, 'Logeado'); // Lo seteo como un usuario logeado

        window.location.href = 'Perfil.html';
    }
}

function ComprobarDatosIngresados() {
    var mensajeError = "Error!!!";
    var comprobanteDatos = true;

    if(isNaN(parseInt(document.getElementById('input-telefono').value))) {
        mensajeError += "\n- El numero de telefono ingresado no es correcto...";
        comprobanteDatos = false;
    }

    if(isNaN(parseInt(document.getElementById('input-dni').value))) {
        mensajeError += "\n- El numero de DNI ingresado no es correcto...";
        comprobanteDatos = false;
    }

    if(comprobanteDatos == false) {
        alert(mensajeError);
    }

    return comprobanteDatos;
}

function LeerDatosRegistro() {
    var nombreIngresado = document.getElementById('input-nombre').value;
    var apellidoIngresado = document.getElementById('input-apellido').value;
    var correoIngresado = document.getElementById('input-correo').value;
    var telefonoIngresado = parseInt(document.getElementById('input-telefono').value);
    var direccionIngresada = document.getElementById('input-direccion').value;
    var dniIngresado = parseInt(document.getElementById('input-dni').value);
    var contraseniaIngresada = document.getElementById('input-contrasenia').value;
    
    // Creo mi objeto
    const nuevoUsuario = {
        nombre: nombreIngresado,
        apellido: apellidoIngresado,
        correoElectronico: correoIngresado,
        telefono: telefonoIngresado,
        direccion: direccionIngresada,
        dni: dniIngresado,
        password: contraseniaIngresada
    };

    console.log(nuevoUsuario);
    return nuevoUsuario;
}

/*
es posible guardar un objeto creado por ti en el localStorage del navegador. Sin embargo, debes convertir el objeto a una cadena JSON antes de almacenarlo, y luego convertirlo de nuevo a un objeto JavaScript al recuperarlo. Aquí tienes un ejemplo paso a paso:

Guardar un objeto en localStorage
Convertir el objeto a una cadena JSON usando JSON.stringify.
Guardar la cadena JSON en localStorage usando localStorage.setItem.
Recuperar un objeto de localStorage
Recuperar la cadena JSON de localStorage usando localStorage.getItem.
Convertir la cadena JSON de nuevo a un objeto JavaScript usando JSON.parse.
Aquí tienes un ejemplo completo:

javascript
Copiar código
// Tu objeto
const myObject = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// Convertir el objeto a una cadena JSON
const jsonString = JSON.stringify(myObject);

// Guardar la cadena JSON en localStorage
localStorage.setItem('myObjectKey', jsonString);

// Recuperar la cadena JSON de localStorage
const retrievedJsonString = localStorage.getItem('myObjectKey');

// Convertir la cadena JSON de nuevo a un objeto JavaScript
const retrievedObject = JSON.parse(retrievedJsonString);

// Mostrar el objeto recuperado
console.log(retrievedObject);
Notas Importantes
Manejo de errores: Asegúrate de manejar posibles errores, especialmente al convertir cadenas JSON a objetos JavaScript.

javascript
Copiar código
try {
    const retrievedObject = JSON.parse(retrievedJsonString);
    console.log(retrievedObject);
} catch (error) {
    console.error('Error parsing JSON:', error);
}
Capacidad de localStorage: localStorage tiene un límite de capacidad (alrededor de 5-10 MB según el navegador), por lo que es adecuado para almacenar datos relativamente pequeños.

Datos sensibles: No almacenes información sensible en localStorage, ya que es accesible desde cualquier script que se ejecute en la misma página.

Siguiendo estos pasos, puedes guardar y recuperar objetos personalizados en localStorage sin problemas.

*/