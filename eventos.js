/*Existen 3 modelos de eventos diferentes:
    1-Modelo basico de eventos.
      Caracteristicas limitadas.
      Pero funciona en todos los navegadores.

    2-Modelo de eventos estandar.
      Podemos hacer mas cosas con el.
      Todos los navegadores lo soportan.
      
      Las versiones anteriores de Internet Explorer como IE7 no lo soportan.

    3-Modelo de eventos de Internet Explorer.
      Modelo creado por Microsoft exclusivamente para Edge.
*/
function crearCaja(){ //creamos la funcino crearCaja
    var contenedor = document.getElementById('contenedor'); //creamos una variable donde introduciremos nuestro contenedor que se encuentra en html, trayendolo con getElementById
    var caja = document.createElement('div');//Luego creamos otra variable llamada caja y dentro escribimos el codigo de crear caja createElement, para mas adelante acceder por medio de la variable
    caja.className = 'caja'; //Le ponemos una clase a nuestra variable caja
    contenedor.appendChild(caja); //Luego con appenChild() decimos al contenedor que queremos agregar cajas dentro de el.

}

var btncaja = document.getElementById('btn-caja');// Traemos nuestro boton de html con getElementById y lo introducimos en una variable, en este caso btncaja.

//Ejecutamos un evento//
btncaja.addEventListener('click', crearCaja);//Luego le decimos al boton que queremos agregarle un evento, que cuando se haga 'click' en el, me ejecute la funcion 'crear caja', donde se estarán agregando cajas.


// //1
// function saludo(){
//     alert('HOla');
// }
// function saludo2(){
//     alert('Hola 2');
// }
// //2
// var btnsaludar = document.getElementById('btn-saludar');
// btnsaludar.addEventListener('click', saludo)//Tenemos que estamos accediendo a nuestro boton, lo ponemos dentro de una variable llamada btnsaludar, a nuestro boton le estamos agragando un evento escucha o addEventListener, esto se va a encargar de revisar cuando el usuario haga un click en el boton y cuando lo haga se ejecutará la función saludo.
// //Las ventajas de este modelo es que podemos agregar mas eventos, por ejemplo: 
// btnsaludar.addEventListener('click', saludo2);

// //Cómo eliminamos un evento?
// btnsaludar.removeEventListener('click', saludo);
// //Tambien podemos ejecutar una funcion anonima, por ejemplo:
// btnsaludar.addEventListener('click', function(){
//     //Codigo
// })

/* Algunos de los eventos mas usados:
      click
      focus
      blur
      change
      onload
      mouseover
      mouseout
      resize
      submit
*/
