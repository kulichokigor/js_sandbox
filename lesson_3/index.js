//1

class Human {
	constructor(name, age){
		if(typeof name === 'string'){
		this.name = name
	}
	if(typeof age === 'number'){
		this.age = age
	}
	}
	sayHello(){
		console.log("Hello, my name is " + this.name + " I am " + this.age + " years old")
	}
}


class AlevelStudent extends Human{
	constructor (name, age, marks){
		super(name, age);

		this.marks = marks;
	}
	averageMark(){
	 let sum = 0;
	 let result;
		for (var i = 0; i < this.marks.length; i++) {
			sum += this.marks[i]
		}
		return result = sum / this.marks.length
}
}

//*2
class Calculator {
	constructor (num = 0){
		this.result = num;
	}
	reset(num){
		this.result = 0;
		return this;
	}
	add(num = 0){
		(this.result) += (num);
		return this;
		
	}
	sub(num = 0){
		(this.result) -= (num);
		return this;
	}
	mul(num = 0){
		(this.result) *= (num);
		return this;
	}
	div(num = 1){
		(this.result) /= (num);
		return this;
	}
	pow(num = 1){
		this.result = Math.pow(this.result, num);
		return this;
	}
	sqrt(num = 1){
		this.result = Math.sqrt(this.result);
		return this;
	}
	getResult(){
		return this.result
	}
};

//*3

class Point {
	constructor(x, y){
		this.x = x;
		this.y = y;
	}

	toString(){
		return 'Point[' + this.x + ' ' + this.y + ']'
	}

	set(x, y){
		if(typeof x == 'number' && typeof y == 'number'){
		this.x = x;
		this.y = y; 
		}
	}
	getX(){
		return this.x
	}
	getY(){
		return this.y
	}
}

class Line{
	constructor(point1, point2){
		this.point1 = point1;
		this.point2 = point2;
	}

	toString(){
		return 'Line(' + this.point1 + ' - ' + this.point2 + ')';
	}
	length(){

		return Math.sqrt(Math.pow(this.point2.x - this.point1.x, 2) + Math.pow(this.point2.y - this.point1.y, 2));
	}

}

class WeightedPoint extends Point{
	constructor(x, y, weight){
		super(x,y);
		this.weight = weight
	}
	toString(){
		return this.weight + '&' + super.toString();
	}
	set(x, y, weight){
		if(typeof x == 'number' && typeof y == 'number'){
		this.x = x;
		this.y = y; 
		this.weight = weight
		}
	}
	getWeight(){
		return this.weight
	}
}

//*4
class CalculatorExtended extends Calculator{
	constructor(num, rem = ''){
		super(num)
		this.rem = rem;
	}
	toString(){
	}
}