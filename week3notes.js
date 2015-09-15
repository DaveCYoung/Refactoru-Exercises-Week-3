// angular.module('exModule', []);
// angular.module('exModule');
// angular.module('exModule').controller('mainController', ['$scope', function($scope){


// }])

// var add = function(a, b, c){  // doesn't check if the function actually recovered values..
// 	console.log(a, b, c);
// 	return a+b+c;	
// }

// var add = function(a, b, c){
// 	a = a || 0;  // a = a OR 5.  value is equal to first truthy value in the chain. sets value equal to zero if no value entered.  
// 	b = b || 0;
// 	c = c || 0;   // function read 0 || 15, function would go to 15 because zero is falsey. 



// 	console.log(a, b, c);
// 	return a+b+c;	
// }


// console.log(add(5,10))

// var config = function(args){
// 	args.people = args.people || [{name:'Alice'}, {name: 'Bob'}]
// 	return args;
// }

// console.log(config({
// 	people:[] // empy array is truthy, won't be replaced by default value.  
// }))


// console.log(config({}))

// var log = function(){

// for(var i = 0; i<arguments.length; i++){ //arguments object...  implicit, doesn't have to be defined.  has numberical indicies and a legth property.  arrays are specialized objects.  
// 	console.log(arguments[i])
// }
// }

// log('this', 'is', 'a', 'lot', 'of', 'durr')

//callbacks

// var now = function(){
// 	console.log('NOW')
// }
// //built into javascript. takes function, time in milliseconds
// // setTimeout(now, 5000)
// // never see now() to call thefunction. 

// var intervalID = setInterval(now, 500)
// //returns intervalID

// setTimeout(function(){
// 	clearInterval(intervalID)}, 4000)
	
// var names = [
// 'bob',
// 'carlos',
// 'dave',
// 'alice',
// 'Matthew']
// sort is a destructive method because it modifies the original array.  like push and pop.
// //in contrast, split is non-destructive because it returns a new array instead of modifying the original. 
// names.sort();

// console.log(names)

// var names = [
// {name: 'bob bobberson', age: 12},
// {name:'carlos bobsmith', age: 42},
// {name:'dave young', age: 22},
// {name:'alice bobbins', age: 25},
// {name:'Matthew bowbart', age: 72},
// ]

// names.sort(function(argA, argB){
// 	if(argA.name>argB.name){
// 		return 1
// 		//if a sort function returns a positive number, then a should be sorted before b.
// 	}
// 	else if (argA.name<argB.name){
// 		return -1
// 		//if a sort function returns negative number, then argA should be sorted after argB.
// 	}
// 	else if (argA.name === argB.name)
// 		return 0
// 		//returning zero indicates indifferent regarding order.
// })


// console.log(names)



//sorts by number of 'b's in their name...
// names.sort(function(argA, argB){
// 	var BinA = 0
// 	var BinB = 0
// 	for (var i = 0; i<argA.name.length; i++){
// 		if(argA.name[i]==='b'){
// 			BinA++
// 		}
// 	}
// 	for (var i = 0; i<argB.name.length; i++){
// 		if(argB.name[i]==='b'){
// 			BinB++
// 		}
// 	}

// 	//second sorting criteria 

// 	if(!(BinA == BinB)){
// 		return BinA-BinB
// 	}
// 	else{
// 		return argB.age - argA.age //sorting by age instead of name if names are equal.  
// 	}

	
// })
// console.log(names)

// var myArray = []

// var add = function(a, b){
// 	var temp = a+b;
// 	myArray[0]=temp;
	
// 	return temp;
// 	//local variables cease to exit after the function finishes.  this is called garbage collection.  exception to garbage collection is called closure. 
// }

// console.log(add(2,3))
// console.log(myArray)
// console.log(output) //output is undefinte beceause it ceases to exist following the conclution of function add.


//CLOSURE example
// var counterConstructor = function(){
// 	var start = 0
// 	var counter = function (){
// 			console.log(start++)
// 	}
// 	return counter 
// }
// var myCounter = counterConstructor()  // only actually calls counterconstructor once.  it's calling the function within counterconstructor which is counter.  
// var yourCounter = counterConstructor()

// myCounter()

// myCounter()

// myCounter()

// myCounter()

// yourCounter()

// myCounter()

// FUNCTIONAL PROGRAMMING EXAMPLE 


// var words = ["this", 'is'. 'a', 'string']


// var capWords = function(wordsArray){
// 	for (var i = 0; i<words.Array.length; i++){
// 		wordsArray[i]=wordsArray[i].touppercase()
// 	}
// }

// var people = [
// 'Alice Bobbits',
// 'Bob Baggins',
// 'Carlos Carlyle',
// 'Dan Blathers',
// ]

// var clubMembers = people.filter(function(element){
// 	var howManyB = 0;
// 	for (var i = 0; i<element.length; i++){
// 		if (element[i].toLowerCase()==='b'){
// 			howManyB++
// 		}
// 	}
// 	if(howManyB>1){return true}
// 		else {return false}
// })

// console.log(clubMembers)
 

// filter as does return, puts names into an array called clubMembers.

var numbers = [7, 5, 14, 420, 12, 42]

var sum = numbers.reduce(function(runningTotal, currentValue){
	console.log('Running Total = ', runningTotal)
	console.log ('current value = ', currentValue)
return runningTotal + currentValue
}, 0)

console.log(sum)





















