function makeGreetings(age){
	var arr = ['год', 'года', 'лет'];
	var value = age % 10;
	var result;
	if (value < 1 || value >= 5 ){result = arr[2]}
	else if(value == 1){result = arr[0]}
	else if(value >= 2 && value <= 4){result = arr[1]};
	return 'Мой возраст ' + age + result;
};
console.log(makeGreetings(age));

function splitArray( arr1, arg ){
	var newArr = new Array (Math.ceil(arr1.length / arg));
	var smallArr = new Array(arr1.length);
	for(var i = 0, j = 0; i < arr1.length / arg; i+= 1){
		smallArr =  arr1.slice(j, j + arg);
		newArr [i] = smallArr;
	};
	return newArr
};




