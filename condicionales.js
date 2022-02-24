// if(condicion){
//     codigo
// }

// var edad = 18;

// if(edad >= 18){
//     document.write('Eres mayor de edad');
// } else{
//     document.write('Eres menor de edad');
// }


var pais = 'Malawi';

// if(pais == 'Mexico'){
//     document.write('Eres Mexicano');
// } else if(pais == 'España'){
//     document.write('Eres español');
// } else {
//     document.write('No sabemos de donde eres');
// }

switch(pais){
    case 'Mexico':
         document.write('Eres Mexicano');
         break;
    case 'España':
         document.write('Eres Español');
         break;
    case 'China':
         document.write('Eres Chino');
         break;
    default:
         document.write('No sabemos de donde eres');
         break;
}

