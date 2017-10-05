/* 5 Declare a function that depending upon which virtual 'door'
was entered tells the user they've received a different 'prize'
in an alert. After declaring the function, try running it with different options.
There must be at least 3 doors. */

// Created a function that will offer a prize depending on whick door is chosen.
function checkBehindDoor(doorNumber) {
// Setting the var prize which will have different Str reassigned to it based on the door.
	var prize;
// Testing each door with a different prize. Then returning the variable prize.
	if (doorNumber === 1) {
		prize = "A NEW CAR!";
	} else if (doorNumber === 2) {
		prize = "A new washer dryer!";
	} else if (doorNumber === 3) {
		prize = "It's a goat for milking!";
	} else {
		prize = "It's a box of dog biscuits!";
	}
	return prize;
}

// Printing to console to check to see if output is working.
console.log(checkBehindDoor(1));
console.log(checkBehindDoor(2));
console.log(checkBehindDoor(3));
console.log(checkBehindDoor(4));

// Alerting to the screen for final output.
alert(checkBehindDoor(1));
alert(checkBehindDoor(2));
alert(checkBehindDoor(3));
alert(checkBehindDoor(4));
