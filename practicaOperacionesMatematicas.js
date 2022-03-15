function operacion(){
    var a = 55, b = 2, c
    c = Math.PI * Math.pow(a, b) // c = 3.1416 * 55^2
    console.log(c) //9,503.34
}
operacion()

//Teorema de Pitagoras
var hipotenusa = document.getElementById('hipotenusa')
var catetoA = document.getElementById('catetoA')
var catetoB = document.getElementById('catetoB')

hipotenusa.style.cssText = 'width: 85px; background: #000; color: #fff;'
catetoA.style.cssText = 'width: 70px; background: #000; color: #fff;'
catetoB.style.cssText = 'width:70px; background: #000; color: #fff;'

function resultado(){
    hipotenusa = document.getElementById('hipotenusa').value
    catetoA = document.getElementById('catetoA').value
    catetoB = document.getElementById('catetoB').value

    var calculo = Math.pow(hipotenusa, 2)
    var sumaCatetos = Math.pow(catetoA,2) + Math.pow(catetoB, 2)
    alert('El resultado es:   '+ calculo +' = '+ sumaCatetos)
}
