var age = prompt("Enter your age");

if (age < 0) {
	console.log("Error, age is negative");
}

if (age === 21) {
	console.log("Happy 21st birthday");
}

if ((age % 2) > 0) {
	console.log("Your age is odd");
}

else {
	console.log("None of these apply.");
}