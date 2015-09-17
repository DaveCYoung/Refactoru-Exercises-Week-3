// var myArray = [1, 7, 15, 2, 45]
// var result = myArray.map(function(element){
// 	console.log(element)
// 	return element*2
// })
// console.log(myArray)
// console.log(result)

// var underscoreResult = _.map(myArray, function(element){return element*2})

// console.log(underscoreResult)

// _.reduce 


// var start =  "Read the F'in Documentation"
// // Goal : 'RTFD'
// // var start = start.toUpperCase
// var list = start.split(" ")
// console.log(list)

// 		shortlist = _.reduce(list, 
// 		function(acronymSoFar, element){
// 			console.log(element)
// 			return acronymSoFar + element[0].toUpperCase()+"."
// 		},
// 		''
// 		)

// console.log(shortlist)


var tubers = [
{
	name:'Sweet Potato',
	colors: ['Orange', 'navajo white', 'Purple', 'Burlywood'],
},
{
	name:'Peruvian Blue Potatoes',
	colors: ['Purple', 'Burlywood', 'Red'],
},
{
	name: 'Purple Fingerling Potatoes',
	colors: ['Purple', 'Black', 'Hammock', 'Goldenrod'],
}]

// // ----   FIND/FILTER -----
// var purple = _.find(tubers, function(item){ return item.color === 'Purple'; });
// console.log(purple)


// // ---- PLUCK --------- 
// var purple = _.pluck(tubers, 'color');
// console.log(purple)

// //------ UNIQ --- Creates list of unique items

// var uniquepurple = _.uniq(purple, true);
// console.log(uniquepurple)

// // ----  CHAIN -----

// //_.uniq(_.pluck(tubers, 'color'))

// //goes to...
// var chainmethod = _.chain(tubers) // required - first step to chain
// 					.pluck('color')
// 					.uniq()
// 					.value()  // required - last step to chain.
// console.log(chainmethod)


var colors = _.chain(tubers)
				.pluck('colors')
				.flatten()
				.uniq()
				.value()
console.log(colors)

















