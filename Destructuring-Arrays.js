const restaurant ={
  location: 'Noida',
  name: 'Ambuj',
  categories: ['Italian', 'vegitarian', 'Organic'],
  starterMenu:['galic','bread', 'salad'],
  mainMenu :['Pizza', 'pasta', 'Risotto'],

  order:function(starterIndex,mainIndex){
     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
};

const arr =[2,5,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr;
console.log(x,y,z);
console.log(arr);

const [first, , second] = restaurant.categories;
console.log(first, second);

let [main, secondery] = restaurant.categories;
console.log(main, secondery);


[main, secondery]= [secondery, main];
console.log(main, secondery);


console.log(restaurant.order(0,2));


const [starter, mainCourse] = restaurant.order(1,0);
console.log(starter, mainCourse); 

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//default value

// const [p, q, r] = [8,9];
// console.log(p, q,r);

 const [p = 2, q = 6, r = 1 ] = [8,9];
console.log(p, q,r);
