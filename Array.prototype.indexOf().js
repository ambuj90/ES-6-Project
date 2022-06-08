// Array.prototype.indexOf() 🙋‍♂️

// Returns the first (least) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element from the 
// 0th index number 

var myFriendNames = ["ambuj", "sharma", "ambuj", "ambujtech", "ambuj"];

console.log(myFriendNames.indexOf("Ambuj", 2));

output:
-1

var myFriendNames = ["ambuj", "sharma", "ambuj", "ambujtech", "ambuj"];

console.log(myFriendNames.indexOf("ambuj", 2));
output:
2

console.log(myFriendNames.indexOf("ambuj", 3));
output:
4
