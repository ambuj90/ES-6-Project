const numbers = [4, 9, 16, 25];
const map1 = numbers.map(x => x * 2);
//const map1 = numbers.map(Math.sqrt);

console.log(map1);

------------------------------------------

const array1 = [1, 25, 4, 9, 16, 25];
//num > 9
let newArr = array1.map((curElem, index, arr) => {
    return curElem > 9;
})
console.log(array1);
console.log(newArr);

-------------------------------------------------------
function sumSquareRoots(numbers) {  
   var total = 0;
   for (var i = 0; i < numbers.length; i++) {
        var sqrt = Math.sqrt(numbers[i]);
        total = total + sqrt;
   }
   return total;
}

var numbers = ['0','1', '2', '3', '4', '5'];
var result = sumSquareRoots(numbers);
console.log(result);

-------------------------------------------------------
  
let arr = [25, 36, 49, 64, 81];

let arrSqr = arr.map((curElem) => Math.sqrt(curElem))
console.log(arrSqr);

-------------------------------------------------------
  
  let arr = [2, 3, 4, 6, 8];

let arr2 = arr.map((curElm) => curElm * 2).filter((curElem) => curElem > 10).reduce((accumulator, curElem) => {
    return accumulator += curElem;
});
console.log(arr2);







