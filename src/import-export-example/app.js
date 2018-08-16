// import './utils.js';

// import isSentior, { isAdult, canDrink } from './person.js';
// import subtract, { square, add } from './utils.js';


// console.log('app is running . . .');

// console.log('square = ' + square(4));

// console.log('add = ' + add(1,2));

// console.log('subtract= ' + subtract(2, 1));

// console.log('isSenior?: ' + isSentior(70));

// console.log('isAdult? '+ isAdult(19));
// console.log('canDrink? '+ canDrink(12));


// setting the default export and function
// grab the default and call it



import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

// const template = React.createElement('p', {className: 'hello'}, 'testing 123');

const template = <p>I am ES6 !!</p>;

ReactDOM.render(template ,document.getElementById('app'));

console.log(validator.isEmail(''));