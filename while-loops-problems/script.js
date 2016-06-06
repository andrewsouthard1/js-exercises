console.log("Print all numbers between -10 and 19");
var firstNum = 18;
while(firstNum > -10){
	console.log(firstNum);
	firstNum--;
}

console.log("Print all even numbers between 10 and 40");
var secondNum = 10;
while(secondNum < 40){
	if(secondNum % 2 == 0){
		console.log(secondNum);
	}
	secondNum++;
}

console.log("Print all odd numbers between 300 and 333");
var thirdNum = 300;
while(thirdNum < 333){
	if((thirdNum % 2) != 0){
		console.log(thirdNum);
	}
	thirdNum++;
}

console.log("Print all numbers divisble by 5 AND 3 between 5 and 50");
var fourthNum = 50;
while(fourthNum > 5){
	if((fourthNum % 5 == 0) && (fourthNum % 3 == 0)){
		console.log(fourthNum);
	}
	fourthNum--;
}