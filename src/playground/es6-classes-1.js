
// Set up constructor to take name and age (default to 0)
// getDescription -  Kevin Gallarin is 26 year(s) old
class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        //return 'Hi ' + this.name + '!';
        return `Hi, I am ${this.name}. `
    } 
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
}

// Traveler -> Person
// Add support for homeLocation
// Override getGreeting
// 1. Hi I am Kevin Gallarin. I'm visiting from Philippines.
// (if no home location) 2. Hi. I am Kevin Gallarin


class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getDescription(){
        let description = super.getGreeting();

        if(this.hasHomeLocation()){
            description += `I'm visiting from ${this.homeLocation}`
        }

        return description;
    }
}

const me = new Traveler('Kevin M. Gallarin',26 , 'Philippines');
console.log(me.getDescription());

const other = new Traveler();
console.log(other.getDescription());