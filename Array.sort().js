// Array.prototype.sort() 🙋‍♂️

// The sort() method sorts the elements of an array in place and 
//returns the sorted array. The default sort order is ascending, built 
//upon converting the elements into strings, 
// then comparing their sequences of UTF-16 code units values.

const months = ['March', 'Jan', 'Feb', 'April' , 'Dec', 'Nov'];

console.log(months.sort());

const array1 = [1, 30, 4, 21, 100000, 99];
console.log(array1.sort());

// compareFunction	Optional. 
// A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like:
// function(a, b){return a-b}
// for asecnding order 
array1.sort(function(a,b){
    console.log(a,b);
    if(a>b){
        return 1;
        // b comes first and then a 
    }
    if(a<b){
        // a comes first and then b 
        return -1;
    }
    if(a==b){
        // No changes
        return 0;
    }
});

// for desecnding order 
array1.sort(function(a,b){
    console.log(a,b);
    if(a>b){
        return -1;
        // b comes first and then a 
    }
    if(a<b){
        // a comes first and then b 
        return 1;
    }
    if(a==b){
        // No changes
        return 0;
    }
});

console.log(array1);

-----------------------------------------------------------


var fruits = ["Banana", "Orange", "Apple", "Mango"];

let aFruits = fruits.sort();
console.log(aFruits);

