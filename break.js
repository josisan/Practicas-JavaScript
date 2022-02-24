var amigos = ['manuel', 'luis', 'andres', 'karleny'];

for(amigo in amigos){
     
    if(amigos[amigo] == 'manuel'){ //Estas condiciones como tal se utilizan en los ciclos para poder controlar lo que pasa dentro de estos.
            continue; //Esto lo que hara es que si amigo es igual a manuel lo va a saltar, pero no es que seguirá en la siguiente linea de codigo, sino en la posicion de cesar.
    } else if(amigos[amigo] == 'luis'){
            continue;
    }
          document.write(amigos[amigo] + '<br>');
    
//     if(amigos[amigo] == 'luis'){
//             break; //Esta snetencia de break nos va a cortar todo el ciclo, y va a continuar en la siguiente linea de codigo.
//     }
}

//     console.log('Fin del ciclo.');