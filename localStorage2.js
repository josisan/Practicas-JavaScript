//Esto simplemente es un ejemplo para saber mas sobre el localStorage

//Creamos un objeto llamado Usuario con sus respectivas propiedades




const usuario = {
    nombre: document.getElementById('nombre'),
    edad: document.getElementById('edad'),
    correo: document.getElementById('correo'),
    pais: document.getElementById('pais')

}

localStorage.setItem("Usuario", JSON.stringify(usuario));