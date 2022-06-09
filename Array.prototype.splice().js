//array.splice(index, howmany, item1, ....., itemX)

//index	- Required.The position to add/remove items. Negative value defines the position from the end of the array.
//howmany-	Optional. Number of items to be removed.
//item1, ..., itemX	 - Optional. New elements(s) to be added.

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add 2 elements: 
fruits.splice(2, 0, "Lemon", "Kiwi");

document.getElementById("demo").innerHTML = fruits;
