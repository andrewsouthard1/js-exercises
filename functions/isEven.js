function isEven(number){
	return number % 2 === 0;
}

function factorialRecurs(number){
	if (number === 0){
	return 1;
	}
	else {
		return (number * factorial(number-1));
	}
}

function factorial(number){
	var result = 1;
	for(var i = 1; i<=number; i++){
		result = result * i;
	}
	return result;
}

function kebabToSnake(str){
	var newStr = str.replace(/-/g, "_");
	return newStr;
}