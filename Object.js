// 1️⃣ What is Object Literal?

// Object literal is simply a key:value pair data structure. 

// Storing variables and functions together in one container, 
// we can refer this as an Objects.

let bioData = { 
    myName : "Ambuj Sharma",
    myAge : 26,
    getData : function(){
      console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
    }
}
bioData.getData();

// 2nd way no need to write functions as well after es6


let bioData = { 
  myName : "Ambuj Sharma",
  myAge : 26,
  getData (){
    console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
  }
}

bioData.getData();

// 👉 What if we want object as a value inside an Object 

let bioData = { 
  myName : {
    realName : "Ambuj",
    channelName : "Ambuj tech" 
  },
  myAge : 26,
  getData (){
    console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
  }
}

console.log(bioData.myName.channelName );

