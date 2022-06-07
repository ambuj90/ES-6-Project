// Var
var myName = "Ambuj";
console.log(myName);

myName = "Sharma";
console.log(myName);
----------------------------------------------------
// Let
let myName = "Ambuj";
console.log(myName);

myName = "Sharma";
console.log(myName);

-----------------------------------------------------

// Const
const myName = "Ambuj";
console.log(myName);

myName = "Sharma";
console.log(myName);

-----------------------------------------------------
  
  
function biodata() {
  const myFirstName = "Ambuj";
  console.log(myFirstName);

  if(true){
    const myLastName = "Sharma";
  }

  // console.log('innerOuter ' + myLastName);
}

console.log(myFirstName);

biodata();

// var => Function scope 
// let and const => Block Scope 
