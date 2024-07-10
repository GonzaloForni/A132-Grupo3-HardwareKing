document.addEventListener('DOMContentLoaded', function() {
    console.log('El documento HTML (Perfil) ha sido completamente cargado y analizado');
    var contenidoLogin = document.getElementById('contenedor-login');
    var contenidoDatosPerfil = document.getElementById('contenedor-datos-perfil');

    if(ComprobarEstadoSesion()) {
        contenidoLogin.style.display = 'none';
        contenidoDatosPerfil.style.display = 'block';
        CompletarDatosUsuario(); // Debo cargar los datos del usuario para que los visualice
    }
    else {
        contenidoLogin.style.display = 'block';
        contenidoDatosPerfil.style.display = 'none';
    }
});

function ControllerIniciarSesion() {
    // Leo lo que ingreso
    const datosInicioSesion = LeerDatosIngreso();
    if(datosInicioSesion != null) {
        // Recupero la cadena JSON del localStorage
        const retrievedJsonString = localStorage.getItem(datosInicioSesion.correoElectronico);
        if(retrievedJsonString != null) {
            // Convierto la cadena JSON de nuevo a un objeto JavaScript
            const datosUsuario = JSON.parse(retrievedJsonString);
            if(datosUsuario != null) {
                // Si la contraseña de ambos es igual le permito iniciar sesion y deberia guardar ese usuario en el sessionStorage
                if(datosUsuario.password === datosInicioSesion.contrasenia) {
                    alert("Bienvenido de vuelta " + datosUsuario.nombre + "!");
                
                    // seteo ese usuario en la sesion actual (guardar correo, y un bool de si esta log)
                    sessionStorage.setItem(datosInicioSesion.correoElectronico, 'Logeado');
                }
            }
        }
    }
}

function ControllerCerrarSesion() {
    sessionStorage.clear(); // Limpio todos los datos de la session actual
    location.reload(); // Recargo la pagina
}

function ComprobarEstadoSesion() {
    // Accedo a la sessionStorage y ver si esta logeado
    var comprobanteSesion = false;
    const keys = Object.keys(sessionStorage);
    
    for (const key of keys) {
        const item = sessionStorage.getItem(key);
        if(item == "Logeado") {
            comprobanteSesion = true;
        }
    }
    
    return comprobanteSesion;
}

function LeerDatosIngreso() {
    var correoIngresado = document.getElementById('input-login-correo').value;
    var passIngresada = document.getElementById('input-login-contrasenia').value;

    const datosIngreso = {
        correoElectronico: correoIngresado,
        contrasenia: passIngresada
    }

    return datosIngreso;
}

function CompletarDatosUsuario() {
    const key = sessionStorage.key(0); // Accedo al correo del usuario logeado actualmente del sessionStorage
    const strigDatosUsuarioLogeado = localStorage.getItem(key); // Accedo al resto de datos guardados en el localStorage
    const datosUsuarioLogeado = JSON.parse(strigDatosUsuarioLogeado); // Convierto el jsonString al objeto Usuario

    // Con los id seteo el valor de cada textBox con los datos del usuario
    document.getElementById("textbox-nombre").value = datosUsuarioLogeado.nombre;
    document.getElementById("textbox-apellido").value = datosUsuarioLogeado.apellido;
    document.getElementById("textbox-correo").value = datosUsuarioLogeado.correoElectronico;
    document.getElementById("textbox-telefono").value = datosUsuarioLogeado.telefono;
    document.getElementById("textbox-direccion").value = datosUsuarioLogeado.direccion;
    document.getElementById("textbox-dni").value = datosUsuarioLogeado.dni;
}
