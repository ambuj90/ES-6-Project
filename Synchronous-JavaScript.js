const fun2 = () => {
  console.log(`Function 2️⃣ is called`);
}

const fun1 = () => {
  console.log(`Function 1 is called`);
  fun2();
  console.log(`Function 1 is called Again ✌`);
}

fun1();
