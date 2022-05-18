console.clear();
const usersList = [
    { id: 1, name: 'Josias', city: 2 },
    { id: 1, name: 'Karleny', city: 4 },
    { id: 1, name: 'Loly', city: 1 },
    { id: 1, name: 'Jose', city: 3 }
];

const citiesList = {
    1: 'San Pedro',
    2: 'Santiago',
    3: 'La Romana',
    4: 'Santo Domingo'
};


function getUsers(){
    return new Promise((resolved) =>{
        setTimeout(()=>{
            resolved(usersList);
        }, 2000)
    });
}


function getCities(){
    return new Promise((resolved) => {
        setTimeout(() => {
            resolved(citiesList);
        }, 1000)
    })
}

// getUsers().then(res => {
//     console.log('Users->', res);
// });

// getCities().then(res =>{
//     console.log('Cities->', res)
// })

async function getInfo(){
    const users = await usersList;
    const cities = await citiesList;
    console.log('Users->', users);
    console.log('Cities->', cities);

}
getInfo();