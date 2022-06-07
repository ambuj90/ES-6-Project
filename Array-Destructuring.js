const myBioData = ['Ambuj', 'Sharma', 26];

let myFName = myBioData[0];
let myLName = myBioData[1];
let myAge = myBioData[2];

//let [myFName,myAge, myLName] = myBioData;
console.log(myAge);

//we can add values too 

let [myFName,myLName,myAge, myDegree="MCS"] = myBioData;
console.log(myDegree);
