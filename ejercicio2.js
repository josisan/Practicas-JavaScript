var list = [1, 2, 5, 24, 63, 85, 98, 0, 10];

function masGrande(a, b){
    return a > b? a : b; //operador ternario
};

function maximo(array){
    let max = 0;
    for (let num of array){
        max = masGrande(max, num)
    }
    return max;
}
console.log(list);
console.log(maximo(list));