var formulario = document.getElementById('formulario');
var nombre = formulario.nombre;
var sexo = formulario.sexo;
var terminos = formulario.terminos;


function validar(e){// Validando nombre
    if(nombre.value > 18){
        alert('Hey! solo se permiten 18 caracteres.');
    }else if(nombre.value == ''){
        alert('Por favor ingresa un nombre');
    }

    //validando los radio button
        if(sexo[0].checked == false && sexo[1].checked == false){
            alert('Por favor selecciona un sexo');
        }

    //Validando Terminos y condiciones
    if(!terminos.checked){
        alert('Acepta los Terminos y Condiciones')
    }



    //Evitamos que se envíe el formulario
    e.preventDefault();
}

formulario.addEventListener('submit', validar)