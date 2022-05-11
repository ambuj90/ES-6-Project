 var tomr = 'sunny';

 if(tomr == 'rain'){
  console.log('take a raincoat');
} else{
   console.log('No need to take a raincoat');
 }


//write a program that works out whether if a given year is a leap year or not?
// A normal year has 365 days, leap years have 366, with an extra day in February.

var year = 2022;
debugger;
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log("The year " + year + " is a leap year");
    } else {
      console.log("The year " + year + " is not a leap year");
    }
  } else {
    console.log("The year " + year + " is a leap year");
  }
} else {
  console.log("The year " + year + " is not a leap year");
}

// IF Else Example

if(score = 5){
   console.log("OMG, we loss the game 😭");
 }else{
   console.log("Yay, We won the game 😀");
 }
