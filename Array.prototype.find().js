// Array.prototype.find() 🙋‍♂️

// arr.find(callback(element[, index[, array]])[, thisArg])

// Returns the found element in the array, if some element in the 
// array satisfies the testing function, or undefined if not found.
// Only problem is that it return only one element

const prices = [200, 300, 350, 400, 450, 500, 600];

//price < 400
const findElem = prices.find((currVal) => currVal < 400);
console.log(findElem);

console.log(prices.find((currVal) => currVal > 1400));
