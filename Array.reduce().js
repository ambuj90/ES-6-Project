// The reduce() method executes a reducer function (that you provide) 
// on each element of the array, resulting in single output value.

// The reducer function takes four arguments:

// Accumulator
// Current Value
// Current Index
// Source Array

let arr = [5, 6, 2];

let sum = arr.reduce((accumulator, curElem) => {
    debugger;
    return accumulator += curElem;
}, 7)
console.log(sum);

// The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.

array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
