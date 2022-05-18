//trayendo un documento html por su etiqueta.
var arr = document.getElementsByTagName('p');
for(var i = 0; i<arr.length; i++){
    arr[i].innerHTML = 'Error';
}