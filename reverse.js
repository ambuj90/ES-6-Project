//solution 1

const revString =(str)=>{
  const arr =str.split("");
  arr.reverse();
  str = arr.join("");
  console.log(str);
}
revString("Apple");


//solution 2


(function(str){
  let reversed = "";
  for(let character of str){
    reversed = character+ reversed;
  }
  console.log(reversed);
  
})("Greeting!")
