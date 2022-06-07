const restaurant ={
         location: 'Noida',
         name: 'Ambuj',
         categories: ['Italian', 'vegitarian', 'Organic'],
         starterMenu:['galic','bread', 'salad'],
         mainMenu :['Pizza', 'pasta', 'Risotto'],
         openingHours:{
         	thu: {
         		open: 12,
         		close: 22,
         	},
         	fri: {
         		open: 11,
         		close: 23,
         	},
         	sat:{
         		open: 0,
         		close:24,
         	},
         },

       
         order:function({
            starterIndex , 
            mainIndex , 
            time,
            address,
          }){
               return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
          },
          orderDelivery : function({
            mainIndex = 0, 
            time ='20:00', 
            address, 
            starterIndex = 1,
         }){
              console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered 
               ${address} at ${time}`);
          },
          orderPasta: function(ing1, ing2,ing3){
          	console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
          }
       };

       restaurant.orderDelivery({
         time: '22:30',
         address: "Noida sector 62, India",
         mainIndex: 2,
         starterIndex:2,

       });
       restaurant.orderDelivery({
         address: "Noida sector 20, India",
          starterIndex:1,
       })

   const {name, openingHours, categories} = restaurant;
   console.log(name, openingHours, categories);


   const { 
   	name: restaurantName, 
   	openingHours: hours, 
   	categories:tags
   } = restaurant;
   console.log(restaurantName, hours, tags);


   const { menu = [], starterMenu: starters = [] } = restaurant;
   console.log(menu, starters);

   // mutating varaibles

   let a = 111;
   let b = 999;

   const obj = {a:23,b:7, c:38};
   ({a,b} = obj);
   console.log(a, b);

   // nested object

 /*  const { 
   	fri :{ open, close}, 
   } = openingHours;
   console.log(open, close);*/


 const { 
      fri :{ open : o, close : c}, 
   } = openingHours;
   console.log(o, c)


  let x = 124;
  let y = 245;

  const obj1 = {x:235, y: 95, z:484};
  ({x,y} = obj1);
  console.log(x,y); 


  const arr = [7, 8, 9];
  const badArr = [1, 2,arr[0], arr[1], arr[2]];
  console.log(badArr);

  const newArr = [1,2, ...arr];
  console.log(newArr);

  console.log(...newArr);

  const newMenu = [...restaurant.mainMenu, 'loki','Gnocci'];
  console.log(newMenu);

  console.log(...newMenu);

  //copy Array

  const mainMenuCopy =[...restaurant.mainMenu];
  console.log(mainMenuCopy);

  //add two array

  const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
  console.log(menu1);

  // Iterables: arrays, string, maps, sets. Not Objects

  const str = "Ambuj sharma";
  const letters = [...str, '', 'S'];
  console.log(letters);

// real world example
const Ingredients = [
prompt('Let\s make pasta ! Ingredients 1? '), 
prompt('Ingredients 2? '), 
prompt('Ingredients 3 ? ') ];
console.log(Ingredients);

// restaurant.orderPasta(Ingredients[0],Ingredients[1], Ingredients[2]);
restaurant.orderPasta(...Ingredients);

//Objects

const newRestaurant = {foundedIn: 1998, ...restaurant, founder :'Ambuj Sharma'} ;
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// 7️⃣Spread Operator

// const colors = ['red', 'green', 'blue', 'white', 'pink'];

// const myColors = ['red', 'green', 'blue', 'white','pink', 'yellow', 'black'];
// // // 2nd time add one more color on top and tell we need to write it again 
// // // on myColor array too 

// const MyFavColors = [ ...colors, 'yellow', 'black'];

// console.log(MyFavColors);

