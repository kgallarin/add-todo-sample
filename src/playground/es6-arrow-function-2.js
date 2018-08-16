// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(1,2));

// this keyword - no longer bound with arrow function

const user = {
    name: 'Kevin',
    cities: ['Taytay Rizal','Mandaluyong'],
    // printPlacesLived(){
    //     const cityMessages = this.cities.map((city) => {
    //         return this.name + ' has lived on ' + city;
    //     });
    //     return cityMessages;
    // }
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived on ' + city);
    }
};

console.log(user.printPlacesLived());

// Challenge Area

// const multiplier = {
//     // numbers - array of numbers
//     // multiplyBy - single number
//     // multiply - return a new array where the number have been multiplied
// };

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((num) => num * this.multiplyBy);
    }
};


console.log(multiplier.multiply());