var scores = [90,98,89,100,100,86,94];
var scores2 = [100,1];

function average(arr){
	var sum = 0;

	/*
	for(var i=0; i < arr.length ; i++){
		sum += arr[i]
	}
	*/
	// forEach Variante
	
	scores.forEach(function(sc){
		sum += sc;
	});
	
	var result = sum/ scores.length;
	return result;
}

console.log(average(scores));