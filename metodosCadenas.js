//-------length nos ayuda a identificar la cantidad de caracteres que tiene nuestra cadena de texto.
var nombre = 'Josias Sanchez';
var numeroCaracteres = nombre.length;
// console.log(nombre + ' tiene ' + numeroCaracteres + ' caracteres');


//-------substring nos ayuda a extraer una parte de la cadena de texto.
// var segundoNombre = nombre.substring(7, 14);
// console.log(segundoNombre);

//--------substr nos sirve para extraer palabras pero por caracteres por ejemplo:

// var segundoNombre = nombre.substr(7, 3);
// console.log(segundoNombre);

//------- replace Nos sirve para remplazar partes de nuestra cadena de texto.

// var nuevoNombre = nombre.replace('Josias', 'Karleny');
// console.log(nuevoNombre);

//-------- Nos sirve para cambiar de mayusculas a minusculas o viseversa
//  nombre = nombre.toUpperCase();
//  console.log(nombre);

// console.log(nombre.toLowerCase());

//------- indexOf nos sirve para Buscar la primera ocurrencia en una cadena de texto, por ejemplo

//var posicion = nombre.indexOf('s');
var posicion = nombre.lastIndexOf('a');
console.log(posicion);