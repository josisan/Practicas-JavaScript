const notes = [4, 5, 6, 9, 0, 3];
notes.sort();
console.log(notes); //[0, 3, 4, 5, 6, 9]

//En este ejemplo tratamos de ordenar valores con mas de 2 digitos, el metodo sort() no los ordena como queremos devido a su valor Unicode
const notes2 = [4, 40, 83, 25, 0, 3, 100, 981];
// notes2.sort()
// console.log(notes2);

//Para tener el resultado que queremos debemos tomar en cuenta el siguiente codigo
// notes2.sort((a, b) =>{ //Le pasamos una funcion al metodo sort con 2 parametros, a y b, que seran los dos numeros que vamos a comparar
//     if (a<b){
//         return -1; //Posicioname al valor a antes que el valor b
//     }
//     if (a>b){
//         return 1; //Posicioname al valor a despues de b
//     }
//     return 0;
// })
//podemos resumirlo de la siguiente manera:
notes2.sort((a, b) =>{return a-b})

console.log(notes2); //[0, 3, 4, 25, 40, 83, 100, 981]