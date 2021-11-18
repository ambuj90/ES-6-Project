 const jonas = {
 	name: "jonas",
 	age: 32,
 	city:"noida",
 	year:1991,
 	calAge: function(){
 		return 2037-this.age;
 	},
 	calDetails:function(){
      return this.city;
 	},
 	calYear:function(){
 		return 2037-this.year;
 	}
 };
 jonas.calAge();
 console.log(jonas.calAge());
 jonas.calDetails();
 console.log(jonas.calDetails());

// console.log(this);

const matilda ={
	year:2017,
};
matilda.calYear = jonas.calYear;
matilda.calYear();
console.log(matilda.calYear());

const person = function () {
 	
 }

 const car =()=>{

 }
