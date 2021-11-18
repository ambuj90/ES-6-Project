let age = 30;
  let oldAge = age;
  age = 32;
  console.log(age);
  console.log(oldAge);


  const me = {
  	name : "jonas",
  	age:30,
  };

  const friend = me;
  friend.age = 27;

  console.log( me);
  console.log(friend);

// premitive types

  let lastName = "sharma";
  let oldLastName = lastName;
  lastName = "singh";

  console.log(lastName, oldLastName);

// reference type

  const details = {
  	firstName:"Ambuj",
  	age: 25,
  }
  /*const newDetails = details;   // bacause variable is a constant
  newDetails.age = 27;
  console.log(details.age);
   console.log(newDetails.age);
    
    // newDetails = {};    // its not allowed
   */

   let newDetails = details;   // bacause variable is a not constant
  newDetails.age = 27;
  console.log(details.age);
   console.log(newDetails.age);

    newDetails = {};   // its allowed 

// copying obj

  const details2 = {
  	firstName:"Ambuj",
  	lastName:"sharma",
  	age: 28,
  	family : ['alice', 'Bob'],
  };


  const detailscopy = Object.assign({}, details2);
   detailscopy.lastName = "singh kumar";
   detailscopy.age = 50;
   console.log(detailscopy.age);
   console.log(detailscopy.lastName);
   console.log(detailscopy);

   detailscopy.family.push('mary', 'john');    //add a third member in a family
   console.log(detailscopy.family);
    console.log(details2);
