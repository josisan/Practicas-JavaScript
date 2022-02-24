//Una funcion son bloques de codigos que nos sirven cuando queremos usar el codigo varias veces, es decir si queremos reutilizar codigo una funcion nos puede ser muy util.
//Ejemplo:

//------Estructura de una funcion.

// function nombre(arg1, arg2){
//     //codigo que queremos ejecutar
// }

//-----Estructura de una suma sin funcion

// var numero1 = 10;
// var numero2 = 5;
// var resultado = numero1 + numero2;

// document.write(resultado);

//------Ejemplo de suma utilizando funciones

// function suma(numero1, numero2){ //Nota: Las funciones solo deben ejecutar para la cual la estamos utilizando, por ejemplo sumar.
//        var resultado = numero1 + numero2;
//        return resultado;     //Esta sentencia return nos permite regresar un valor a nuestra funcion.
// }

//-------

// var suma = function(numero1, numero2){
//     return numero1 + numero2;
// }

//-----Funciones autoinvocadas

(function(numero1, numero2){
    alert('Hola mundo');
}())

document.write(suma(3, 7));