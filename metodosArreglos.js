var amigos = ['Josias', 'Carlos', 'Alejandro', 'Karleny'];
var amigos2 = ['Juan', 'Manuel', 'Pedro', 'Mike'];





//-------- Metodo Length Nos permimte conocer cuantos elementos tiene un arreglo.
           //document.write(amigos.length);

//-------- Metodo Join Nos permite separar por cualquier cosa que pongamos dentro del parentesis dentro de comillas.

            //var cadenaTexto = amigos.join('-');
            //document.write(cadenaTexto);

//-------- Metodo Pop y Push

           //amigos.pop(); //Nos permimte eliminar un elemento del aqrreglo que se encuentra al final.
           //amigos.push(); //Nos permite agregar a nuestro arreglo al final.
           //console.log(amigos);

//-------- Metodo shift y unshift
           
           //amigos.shift(); //Nos permite eliminar un elemento del arreglo que se encuentra al principio.
           amigos.unshift(); //Nos permite agregar a nuestro arreglo al principio.
           console.log(amigos);
 
//-------- Metodo concat Nos permite contatenar 2 arreglos.

           //var todosMisAmigos = amigos.concat(amigos2);
           //console.log(todosMisAmigos);

//-------- Metodo Sort y Reverse Nos permite ordenar de forma alfabetica nuestro arrelgo, Reverse nos permite poner nuestro arreglo de forma invertida. Nota: Sort no funciona para ordenar numeros, solo cadena de textos. Para ordenar numero es poniendo dentro de .sort() otra funcion que veremos mas adelante. 
           
            amigos.sort();
            amigos.reverse();
            console.log(amigos);
