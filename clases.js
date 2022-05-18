// class Persona {
//     constructor(nombre, edad){//UNA CLASE NORMALMENTE LLEVA UN CONSTRUCTOR, QUE NO ES MAS QUE CREAR O INICIALIZAR EL ESTADO DE UNA CLASE.
//         this.nombre = nombre; //De esta forma convertimos los para metros en propiedades, con la palabra reservada 'this' haciendo referencia al contexto de la clase.
//         this.edad = edad;
//     }

//     saludar(){
//         console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad}`)
//     }

// }

//Tenemos todo instanciado y creado para poder llamar a nuestra clase y llamar a su metodo, lo podemos hacer de la siguiente manera creando una nueva instancia para esta clase:

// let persona = new Persona('Josias', 25);

// persona.saludar();



//--------Creando-un-Metodo-Estatico---------//

// class Persona {
//     constructor(nombre, edad){
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     saludar(){
//         console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad}`)
//     }

//     static definicion(){
//         console.log('Una persona es un ser humano')
//     }

// }
//Cuando utilizamos una funcino estatica no hay que instanciar, incluso si lo tratamos de hacer nos dara un error de que no es una funcion
// Persona.definicion();



//---------Clases y Herencias-------//
//Una clase puede heredar las propiedades y los metodos de otra clase con tan solo extender de ella.

// class Persona {
//     constructor(nombre, edad){
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     saludar(){
//         console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
//     }

//     static definicion(){
//         console.log('Una persona es un ser Humano');
//     }

// }

// class Desarrollador extends Persona{
// //Si tenemos o no un constructor definido en Nuestra nueva clase, podemos utilizar el constructor de la clase Persona

//     saludoDesarrollador(){
//         this.saludar();
//         console.log(`Soy un/a desarrollador/a de Software`)
//     }

// }

// let desarrollador = new Desarrollador('Karleny', 27);
// desarrollador.saludoDesarrollador();



//-----Cuando utilizamos un constructor de la clase padre y ya tenemos uno en la clase  hijo------//

// class Persona {
//     constructor(nombre, edad){
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     saludar(){
//         console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
//     }

//     static definicion(){
//         console.log('Una persona es un ser Humano');
//     }

// }

// class Desarrollador extends Persona{

//     constructor(nombre, edad, tipo){
//         //para heredar el constructor que tenemos en persona uitilizamos la palabra reservada 'super'
//         super(nombre, edad); //Nos permite utilizar las mismas propiedades de su padre.
//         this.tipo = tipo;
//     }

//     saludoDesarrollador(){
//         this.saludar();
//         console.log(`Soy ${this.tipo} Developer`);
//     }

// }

// let desarrollador = new Desarrollador('Karleny', 27, 'Frontend');
// desarrollador.saludoDesarrollador();

//----Palabra reservada 'super'-----//
//Nos ayuda a obtener las funciones o metodos de la clase padre cuando tenemos un metodo en la clase Hijo con el mismo nombre.

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }

    static definicion(){
        console.log('Una persona es un ser Humano');
    }

}

class Desarrollador extends Persona{

    constructor(nombre, edad, tipo){
        //para heredar el constructor que tenemos en persona uitilizamos la palabra reservada 'super'
        super(nombre, edad); //Nos permite utilizar las mismas propiedades de su padre.
        this.tipo = tipo;
    }

    saludoDesarrollador(){
        super.saludar();
        console.log(`Soy ${this.tipo} Developer`);
    }
    saludar(){
        console.log(`Hola desde la sub-clase`);
    }
}

let desarrollador = new Desarrollador('Karleny', 27, 'Frontend');
desarrollador.saludoDesarrollador();