var cajas = document.getElementsByClassName('caja');

function color(){
    this.classList.toggle('negro'); //con classList.toggle podemos alternar lo que es la clase negro, eliminarla o agregarla.
    //La palabra reservada this nos sirve para detectar cual de todas las cajas ha sido clickeada.
}

for(var i = 0; i< cajas.length; i++){
    cajas[i].addEventListener('click', color);
}