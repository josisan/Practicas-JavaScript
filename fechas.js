var fecha = new Date();
document.write(fecha);

function mostrarTiempo(){
    var fecha = new Date();
    var parrafo = document.getElementById('fecha');
    parrafo.innerHTML = fecha;
}

var intervalo = setInterval(mostrarTiempo, 1000);

console.log(fecha.getHours() - 12 + ' Horas');
console.log(fecha.getMinutes() + ' Minutos');
console.log(fecha.getSeconds() + ' Segundos');

var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log('Día: ' + semana[fecha.getDay()]);
console.log('Més: ' + meses[fecha.getMonth()]);
console.log('Año: ' + fecha.getFullYear());