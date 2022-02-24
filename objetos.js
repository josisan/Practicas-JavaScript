// //Agregar el nombre, la edad y el pais de una persona.

// var josias = {
//     nombre: 'Josias Sanchez',
//     edad: 25,
//     pais: 'Republica Dominicana',
//     bio: function(){
//         return this.nombre + ' tiene ' + this.edad + ' años'
//     }
// };

// var karleny = {
//     nombre: 'Karleny de Sanchez',
//     edad: 27,
//     pais: 'Republica Dominicana',
//     bio: function(){
//         return this.nombre + ' tiene ' + this.edad + ' años'
//     }
// };

// var kelvin = {
//     nombre: 'Kelvin Mena',
//     edad: 27,
//     pais: 'Republica Dominicana',
//     bio: function(){
//         return this.nombre + ' tiene ' + this.edad + ' años'
//     }
// };
// //si no lleva parentesis es una propiedad, si lleva parentesis es un metodo.
// document.write(josias.bio());


//------------------------------------------------------

function persona(nombre, edad, pais){
    this.nombre = nombre;
    this.edad = edad;
    this.pais = pais;
}

var papa = new persona('Arturo', 35, 'Republica Dominicana');
var amigo = new persona('Karleny', 27, 'Republica Dominicana');
var hermano = new persona('Christian', 32, 'Colombia');

document.write(papa.nombre);