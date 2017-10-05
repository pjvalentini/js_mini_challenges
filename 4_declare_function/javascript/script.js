/* 4 Declare a function that takes a name as an argument and tells
the user what name they've entered. Try running it after it has been declared.*/

// Created var with name "Philip", this will be the name that has been entered
var userName = "Philip";
function printName(name) {
	console.log(name + " is the name that has been entered!");
}
// Created var names with an Array of names assigned to it.
var names = ["Bill", "PJ", "Jen"];
// Run the function enteredName() with a string to confirm that the name entered is "Philip".
printName(userName);
// Passing in the indexes of the array in to the function.
printName(names[0]); // prints "Bill is the name that has been entered"
printName(names[1]); // prints "PJ is the name that has been entered"
printName(names[2]); // prints "Jen is the name that has been entered"


// Or this is another way to do this exercise.....
function person(name) {
	return "You have entered the name" + name;
}
console.log(person(" PJ."));
console.log(person(" Bill."));
console.log(person(" Joe."));
