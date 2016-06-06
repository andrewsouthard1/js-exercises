function isEven(number){
	if(number % 2 === 0){
		return true;
	}
	else{
		return -1;
	}
}

function factorial(number){
	if (number === 0){
	return 1;
	}
	else {
		return (number * factorial(number-1));
	}
}

function kebabToSnake(str){
	var newString = str.replace("-", "_");
	return newString;
}