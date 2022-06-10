// A JavaScript string is zero or more characters written inside quotes.

// JavaScript strings are used for storing and manipulating text.
// You can use single or double quotes

// Strings can be created as primitives, 
// from string literals, or as objects, using the String() constructor


let myName = "Ambuj Sharma";
let myChannelName = 'Ambuj sharma';

let ytName = new Number("Ambuj Tech");
//let ytName = 'Ambuj techn';

console.log(myName);
console.log((ytName));

//find the length of a string
let myName = "Ambuj Sharma";
console.log(myName.length);

//Escape Character
let anySentence = "We are the so-called \"Vikings\" from the north.";
console.log(anySentence);

// Finding a String in a String
// String.prototype.indexOf(searchValue [, fromIndex])
// The indexOf() method returns the index of (the position of) the first
//  occurrence of a specified text in a string

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);


