function ControllerCrearCuenta() {
    // Valido los datos
    if(ComprobarDatosIngresados()) {
        // Tomo los datos de los textbox
        const datosUsuario = LeerDatosRegistro();
        
        // Convierto el objeto a una cadena JSON
        const jsonString = JSON.stringify(datosUsuario);
        
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

    const nuevoUsuario = {
        nombre: nombreIngresado,
        apellido: apellidoIngresado,
        correoElectronico: correoIngresado,
        telefono: telefonoIngresado,
        direccion: direccionIngresada,
        dni: dniIngresado,
        password: contraseniaIngresada
    };

    return nuevoUsuario;
}
