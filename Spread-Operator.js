<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Spread Operator</title>
</head>
<body>
<script type="text/javascript">
	
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



</script>
</body>
</html>
