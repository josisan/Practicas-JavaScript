//Nuestas variables pueden ser de 2 tipos: Global  Local

//----------Variable Local
//Las variables locales son las que han sido creadas dentro de una funcion o una funcion anidada (una funcion dentro de otra).
        // function saludo(){
        //     var texto = 'Hola Mundo'
        //     console.log(texto);
        // }

        // saludo();

//------Funciones anidadas
//El scope funciona por niveles, si no encuentra una variable en el mismo nivel subbira de nivel hacia afuera y buscarla. Si no encuentra subira otro niel y asi sucesivamente.

//Si tenemos una funcion anidada (una funcion dentro de otra) podemos buscar variables desde dentro hacia afuera, pero dede una funcion no podemos buscar variables hacia dentro de otra funcion.
        // function saludo(){
        //     var texto = 'Hola Mundo';
        //         function mensaje(){
        //             console.log(texto);
        //         }
        //         mensaje();
            
        // }
        
        // saludo(); 

//--------Variable Global
//Si una variable se declara fuera de una funcion es global
//Las variables globales pueden ser accedidas desde cualquier parte del codigo incluyendo cualquier funcion.
        // var texto = 'Hola mundo';

        // function saludo(texto){
        //     console.log(texto);
        // }
        // saludo(texto);

//--------IMPORTANTE
//Si una variable e declara fuera de una funcion es global.
//Pero las variables dentro de una funcion pueden ser globales tambien.

//Si dentro de la funcion declaramos una varianle mediante la palabra "var" sera local. Pero si no le ponemos "var" sera global.
        // function saludo(){
        //   mensaje = 'Hola mundo';
        // }
        // saludo();
        // console.log(mensaje);

//-------------Como proteger nuestras variables de codigo de terceros.

    (function(){
        var mensaje = 'Hola Mundo';

        //todo tu codigo
    }())