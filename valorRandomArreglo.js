var pea = ['1', '2', '3'];
var rand = Math.floor(Math.random()*pea.length)
var value = pea[rand];

if(value !== '1'){
    console.log('No esta debajo del caparazon 1')
}
if(value !== '2'){
    console.log('No esta debajo del caparazon 2')
}
if(value !== '3'){
    console.log('No esta debajo del caparazon 3')
}
if(value === '1' || '2' || '3'){
    console.log('El guisante esta en el caparazon: ' + value)
}