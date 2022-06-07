// ➡ Object destructuring 🏁
const myBioData = {
    myFname: 'Ambuj',
    myLname: 'Sharma',
    myAge: 29
}

let age = myBioData.age;
//let myFname = myBioData.myFname;

let { myFname, myLname, myAge, myDegree = "CS" } = myBioData;
console.log(myFname, myLname, myAge, myDegree);
