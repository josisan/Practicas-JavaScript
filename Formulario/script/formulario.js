 (function(){
    //Declarando las variables que tendran dentro los id y las clase de nuestro documento html
    var formulario = document.getElementById('formulario'),
        nombre = formulario.nombre,
        correo = formulario.correo,
        sexo = formulario.sexo,
        terminos = formulario.terminos,
        error = document.getElementById('error');

    //Creamos nuestra funcion para validar nombre
    function validarNombre(e){// esa 'e' es de e.preventDefault() que se pone al final para que nuestro formulario no se envie si le faltan datos
         if(nombre.value == '' || nombre.value == null){//Aqui le estamos diciendo que si nombre contiene un valor en blanco o es nulo, se cumplira lo que esta dentro de llaves
             console.log('completa el nombre');
             nombre.style.border = "2px solid #ff0000"; //cuando se cumpla la condicion y nombre este vacio, los bordes de nuestro input se pondra rojo
             error.style.display = "block";// en los estilos le habiamos puesto un display: none para que no aparezca el cuadro rojo, aqui se lo ponemos para que se vaya agregando la lista de abajo
             error.innerHTML += '<li>Por favor completa el nombre</li>';//estamos accediendo a nuestro codigo html con la variable error y el innerHTML, le estamos diciendo que se le sume la cadena de texto que se muestra arriba.
             e.preventDefault();
         } else{
             error.style.display = "none";//si no se cumple la condicion el cuadro de errores no aparecera
             nombre.style.border = "";
         }
    }

    function validarCorreo(e){
        if(correo.value == '' || correo.value == null){
            console.log('completa el correo');
            correo.style.border = "2px solid #ff0000";
            error.style.display = "block";
            error.innerHTML += '<li>Por favor completa el correo</li>';
            e.preventDefault();
        } else{
            //error.style.display = "none";
            correo.style.border = "";
        }
    }

    function validarSexo(e){
        if(sexo.value == '' || sexo.value == null){
            console.log('completa el sexo');
            error.style.display = "block";
            error.innerHTML += '<li>Por favor completa el sexo</li>';
            e.preventDefault();
        } else{
            //error.style.display = "none";
        }
    }

    function validarTerminos(e){
        if(terminos.checked == false){
            console.log('Acepta los terminos');
            error.style.display = "block";
            error.innerHTML += '<li>Por favor acepta los terminos</li>';
            e.preventDefault();
        } else{
            //error.style.display = "none";
        }
    }

    function validarFormulario(e){
        error.innerHTML = '';
        //El codigo se ejecuta de abajo para arriba
        validarNombre(e);
        validarCorreo(e);
        validarSexo(e);
        validarTerminos(e);
    }
        
    formulario.addEventListener('submit', validarFormulario);
 }());