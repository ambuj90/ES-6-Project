// String.prototype.search(regexp) 🙋‍♂️

// The search() method searches a string for a specified 
// value and returns the position of the match

const myBioData = 'I am the ambuj tech';
let sData = myBioData.search("tech");
console.log(sData);

// The search() method cannot take a second start position argument.

// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// The slice() Method 🙋‍♂️
// slice() extracts a part of a string and returns the extracted part 
// in a new string.

// The method takes 2 parameters: the start position, 
// and the end position (end not included).

var str = "Apple, Bananaa, Kiwi, mango";

// let res = str.slice(0,4);
let res = str.slice(7);
console.log(res);
