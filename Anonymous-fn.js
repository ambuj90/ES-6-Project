// A function expression is similar to and has the same syntax  as a function declaration One can define "named" 
// function expressions (where the name of the expression might be used in the call stack for example)  or "anonymous" function expressions.

var funExp = function(a,b){
  return total = a+b;
}

var sum = funExp(15,15);
var sum1 = funExp(20,15);

console.log(sum > sum1 );
