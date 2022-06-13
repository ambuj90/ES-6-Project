// new Date() 🙋‍♂️
// Date objects are created with the new Date() constructor.

let currDate = new Date();
console.log(currDate);

console.log(new Date());
console.log(new Date().toLocaleString()); // 9/11/2019, 1:25:01 PM
console.log(new Date().toString()); // Wed Sep 11 2019 13:25:01 GMT+0700 (GMT+07:00)


// new Date(year, month, ...) 🙋‍♂️
// 7 numbers specify year, month, day, hour, minute, second, 
// and millisecond (in that order)
// Note: JavaScript counts months from 0 to 11.

// January is 0. December is 11.


var d = new Date(2021, 0);
console.log(d.toLocaleString());


// new Date(dateString) 🙋‍♂️
// new Date(dateString) creates a new date object from a date string

var d = new Date("October 13, 2021 11:13:00");
console.log(d.toLocaleString());


//👉 Dates Method

const curDate = new Date();

// // how to get the indivisual date 
console.log(curDate.toLocaleString());
console.log(curDate.getFullYear());
console.log(curDate.getMonth()); // 0-11 jan to dec
console.log(curDate.getDate());
console.log(curDate.getDay());


