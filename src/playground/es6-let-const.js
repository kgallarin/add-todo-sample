var nameVar = 'Kevin';
var nameVar = 'Andrew';
console.log('nameVar', nameVar);

let nameLet = 'KG';
// let nameLet = 'Hey';
console.log('nameLet', nameLet);

const nameConst = 'Keygee';
console.log('nameConst', nameConst);

function getPetName(){
    const petName = 'Pepper';
    return petName;
}

const petName = getPetName();
console.log(petName);


// Block scoping

const fullName = 'Kevin Gallarin';
let firstName;

if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);

// use let if youre gonna 'REASSIGN IT'