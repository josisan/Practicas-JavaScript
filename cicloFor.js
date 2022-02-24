// for(inicio; condicion; actualizacion){
//     //codigo
// }
//-------Ciclo del 1 al 10

//for(var i = 1; i <= 10; i++){ //Declaramos la variable, normalmente es i de inicio, luego ponemos una condicion, queremos que el codigo se repita hasta que se cumpla la condicion, algo que apoya esto es la actualizacion, ya sea de decremento o incremento, esto es muy importante porque si no la utilizamos nuestro codigo se repetiria de manera infinita, porque cuenta del 1 al 10, y luego se repite de 1 al 10, esto porque no hay una actualizacion, si ponemos i++ el codigo se incrementará hasta 10 y luego 11, pero ya la condicion no se cumpliría y terminaría la ejecución del codigo.
//      document.write(i);
//      document.write('<br>')
// }

//------Ciclo del 10 al 1

// for(var i = 10; i >= 0; i--){
//       document.write(i);
//       document.write('<br>')
// }

//------Ciclo para recorrer un arreglo mediante for
var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

    //  for(var i = 0; i < meses.length; i++){
    //      document.write(i+1 + '.-' + meses[i])
    //      document.write('<br>');
    //  }

    for(mes in meses){
        document.write(meses[mes])
        document.write('<br>');
    }