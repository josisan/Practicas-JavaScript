var cajas = document.getElementsByTagName('div');
//var cajas = document.getElementsByClassName('caja');
var primeraCaja = document.getElementById('primeraCaja');

// primeraCaja.textContent = 'Hola Mundo';
// primeraCaja.innerHTML = '<u>Hola que hace</u>';

//-----Creando Nodos
// 1--Creando el elemento
var caja = document.createElement('div');

// 2--Crear el nodo de texto
var contenido = document.createTextNode('Hola Mundo');

// 3--Añadir el nodo de texto al elemento
caja.appendChild(contenido);// seleccionamos nuestra caja y con appendChild le incrustamos lo que seria el contenido.

// 4--Agregar atributos
caja.setAttribute('class', 'caja naranja');
caja.setAttribute('id', 'caja');

// 5--Agregar el elemento al documento
//Una forma de hacerlo
// var contenedor = document.getElementById('contenedor'); //Estamos accediendo al contenedor de las cajas, lo guardamos en la variable 'contenedor'
// contenedor.appendChild(caja); // En este caso estammos accediendo al contenedor y le estamos diciendo que nos incruste la 'caja'.

//------Modificando la clase o id de un elemento
caja.id = 'caja';
caja.className = 'caja naranja';

//------Cómo conocer el elemento padre de un elemento
var padre = cajas[0].parentNode;

//------Cómo posicionar el elemento antes de otro selecionado en base al elemento padre
padre.insertBefore(caja, primeraCaja); //Seleccionamos el elemento padre que sería todo nuestro 'Section' y le estamos diciendo con insertBefore que queremos insertar la caja antes de la primeraCaja. Este es el que tiene el id primeraCaja. si queremos posiscionarla despues, podemos poner padre.insertBefore(caja, caja[2]), le estamos diciendo que nos la posicione antes del espacio 2 del array, comenzando desde 0,1,2.. sería antes de terceraCaja.

//------Cómo reemplazar una caja por otra
//padre.replaceChild(caja, cajas[3]);

//Cómo eliminar nodos
padre.removeChild(cajas[4]);