function printReverse(array){
	for(var i = array.length; i >=0; i--){
		console.log(array[i]);
	}
}


function isUniform(array){
	var firstElement = array[0];
	var boolean;
	array.forEach(function(i){
		if(i === firstElement){
			boolean = true;;
		}
		else{
			boolean = false;
		}
	})
	return boolean;
}

function sumArray(array){
	var total = 0;
	array.forEach(function(i){
		total += i;
	})
	return total;
}

function max(array){
	var max = array[0];
	array.forEach(function(i){
		if(i > max){
			max = i;
		}
	})
	return max;
}