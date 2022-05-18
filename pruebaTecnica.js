//Problema #1
//Escribir un objeto con  un metodo "Hello" que escriba hello <name> en la consola.
// 'use strict';
const  persona = {
    name: 'Alejandro',
    hello: () => console.log(`Hello ${persona.name}`)

}

persona.hello();

//Problema #1 (B)
//Como harias que el nombre del problema 1A sea inmutable o que no se cambie.

Object.freeze(persona);
persona.name = 'Karleny';
persona.hello();

//Problema #2
//Escribe una funcion que muestre las 5 ciudades que mas se repiten en el array que esta debajo

const citiesList = [
    "London",
    "Wachington DC",
    "London",
    "Mexico",
    "London",
    "Barcelona",
    "London",
    "Wachington DC",
    "Mexico",
    "Barcelona",
    "Miami",
    "Mexico",
    "Caracas",
    "Jose Francisca",
    "Minesota",
    "Wachington DC",
    "Wachington DC",
    "Jose Francisca",
    "Jose Francisca",
    "London",
    "London",
    "Wachington DC",
    "London",
    "Barcelona",
    "San Pedro",
    "La vega",
    "La Romana",
    "Constanza",
    "San Pedro",
    "La vega"
];

function masRepetidas(){
    const cities = {}
    citiesList.forEach(city => {
        cities[city] = !cities[city] ? 1 : cities[city] += 1
    }) 
    return cities;
}
console.log(masRepetidas());