//1

function removeKeys(obj, arr){
	for (var i = 0; i < arr.length; i++){
		delete obj[arr[i]];
	}
	return obj;
};

//2

function clearNumbers(arr){
	var arrey = [];
	for(var i = 0; i < arr.length; i++){
		var newArr = [];
		for(var j = 0; j < arr[i].length; j++){
			if (typeof arr[i][j] === 'number') { 
				newArr.push(arr[i][j]);
			};
		}
		arrey.push(newArr)
	};
	return arrey
};

//3
function reverse(){
	var args = [];
	
for (var i = arguments.length - 1; i >= 0 ; i--) {
	var str = new String(arguments[i]);
	var newString = '';
for (var n = str.length-1; n >= 0; n--){
	newString += str[i]
} 
	args.push(newString)
};
return args
}
