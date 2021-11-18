 var firstName= "matilda";
   var age = 50;

	const jonas = {
		firstName: "jonas",
		age: 32,
		year: 2017,
		calAge: function(){
			console.log( 2037- this.year);
			//console.log(this);

           /*const self = this;
			const isMillenial = function(){
				console.log(self);
				console.log(self.year >= 1991 && self.year <= 2021);
				//console.log(this.year >= 1991 && this.year <= 2021);

			};
			isMillenial();*/

			//const self = this;
	     const isMillenial =()=>{
		console.log(this);
		console.log(this.year >= 1991 && this.year <= 2021);
	};
	isMillenial();
		},


		greet:()=>{
			 console.log(`Hey ${this.firstName + " and age is "  + " "+ this.age}`);
			 console.log(this);
		}
	};
	jonas.calAge();
	jonas.greet();


//arguments keyword
   const addExp = function(a,b){      //simple function
   	console.log(arguments);
   	return a + b;
   };
   addExp(2, 3);
    addExp(2, 3, 5, 8);


   var addArrow =(a, b)=> {    //arrow function
   	console.log(arguments);
   	return a + b;
   };
   addArrow(5,6);
