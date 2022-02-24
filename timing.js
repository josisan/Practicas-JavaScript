//----setTimeout()
function saludo(){
    alert('Hola mundo');
}

// var tiempo = setTimeout(saludo, 3000);
// clearTimeout(tiempo);

// document.getElementById('btn-iniciar').addEventListener('click', function(){
//     setTimeout(saludo, 3000);
// });

//----setInterval()
var intervalo = setInterval(saludo, 3000);
document.getElementById('btn-detener').addEventListener('click', function(){
    clearInterval(intervalo);
});
