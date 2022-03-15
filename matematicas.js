//La funcion general de las matematicas en JavaScript es Math

//FUNCION PI
var valorPi = Math.PI
function pi(){
    alert('Mi valor pi en Js es '+ valorPi)
}

//FUNCION REDONDEAR ROUND
function round(){
   var redondeado = Math.round(valorPi)
    alert('El valor redondeado es '+ redondeado)
}

//Funcion calcular exponente con Pow
function exponente(){
    var base = document.getElementById('base').value
    var exponente = document.getElementById('exponente').value
    
    var resultado = Math.pow(base, exponente)

    alert('El resultado de '+ base +' elebado a '+ exponente + ' es igual a: '+ resultado)
}

//Funcion Raiz sqrt
function raiz(){
    var numero = document.getElementById('numero').value
    var calcularRaiz = Math.sqrt(numero)
    alert('La raiz de '+ numero +' es: '+ calcularRaiz)
}

//El valor absoluto de un Numero abs
function abs(){
var numero = document.getElementById('numero').value
    var calcularAbs = Math.abs(numero)
    alert('El valor absoluto de '+ numero +' es: '+ calcularAbs)
}

//Calcular Seno
function seno(){
var numero = document.getElementById('numero').value
    var calcularSeno = Math.sin(numero)
    alert('El Seno de '+ numero +' es: '+ calcularSeno)
}

//Calcular Coseno
function coseno(){
var numero = document.getElementById('numero').value
    var calcularCoseno = Math.cos(numero)
    alert('El Coseno de '+ numero +' es: '+ calcularCoseno)
}

