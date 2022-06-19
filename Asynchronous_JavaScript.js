// Asynchronous JavaScript

const fun2 = () => {
  setTimeout(()=> {
      console.log(`Function 2️⃣  is called`);
  }, 2000);
}

const fun1 = () => {
  console.log(`Function 1 is called`);
  fun2();
  console.log(`Function 1 is called Again ✌`);
}

fun1();
//
// <script>
// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function getFile(myCallback) {
//   let req = new XMLHttpRequest();
//   req.open('GET', "mycar.html");
//   req.onload = function() {
//     if (req.status == 200) {
//       myCallback(this.responseText);
//     } else {
//       myCallback("Error: " + req.status);
//     }
//   }
//   req.send();
// }

// getFile(myDisplayer); 
// </script>

