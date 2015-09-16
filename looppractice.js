// var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
// // for (var i = 0; i<(animals.length-1); i++){
// 	console.log(animals[i])
// }

// for (var i = 0; i<(animals.length); i=i+2){
// 	console.log(animals[i])
// }

// for (var i = 4; i>= 0; i--){
// 	console.log(animals[i])
// }

// for (var i = 0; i<=4; i++){
// 	if (i === 0) {console.log(animals[i])}
// 		else if (i === 4){console.log(animals[i])}
// 			else{console.log(animals[i])
// 				console.log(animals[i])}

// }

// getName = function(x){
// 	console.log(x.name)
// }

// getName({ name: 'Luisa', age: 25 })
// counter = 0
// totalLetters= function(array){
// 	for(i=0; i<array.length; i++){
// 		counter = counter + array[i].length;
// 	}
// 	console.log(counter)
// }


// totalLetters(['javascript', 'is', 'awesome'])




//  keyValue = function(x, y){
 	
// 	var object1 = {string}
// 	console.log(object1)
// }

// keyValue('city', 'Denver')



// negativeIndex = function(x, y){

// 	return x[y+(x.length)]
// }

// console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2))


// lettercount = function(x){
// 	var array = x.split(" ")
// 	var maxletters = 0;
// 	for (i=0; i<array.length; i++){  // once for each word
// 		lettercounter = 0;
// 		// console.log("new word")
// 				for(j=0; j<array[i].length;j++){  // once for each letter in each word
// 						for(k=0; k<j;k++){  //once for each letter in each word
// 				// console.log(array[i][j])
// 				// console.log(array[i][k])
// 				// console.log("-----------")
// 				if (array[i][j]===array[i][k]){  // if each letter is the same 
// 				lettercounter++
// 				console.log(lettercounter)}
// 				if (lettercounter > maxletters){
// 					maxletters = lettercounter
// 					var mostletters = array[i]
// 				}
// 			}
// 		}
// 	}
// console.log(mostletters)
// }
// lettercount("Today, is the greatest day ever!")



// lettercount = function(x){
// 	var array = x.split(" ")
// 	var maxletters = 0;
// 	var mostletters = '';
// 	for (i=0; i<array.length; i++){  // once for each word
// 		lettercounter = 0;
// 		array[i]=array[i].toLowerCase();
// 				for(j=0; j<array[i].length;j++){  // once for each letter in each word
// 						for(k=0; k<j;k++){  //once for each letter in each word
// 							if (array[i][j]===array[i][k]){  // if each letter is the same 
// 								lettercounter++
// 								(lettercounter)}
// 							if (lettercounter > maxletters){
// 								maxletters = lettercounter
// 								mostletters = array[i]
// 				}
// 			}
// 		}
// 	}
// if(maxletters>0){console.log(mostletters); return mostletters;}
// 	else{console.log("No Repeats"); return -1;}
// }
// lettercount("Today, is the greatest day ever!")


// swapCase = function(input){
// 	var array = input.split('')
// 	var newarray = []
// 	for(i=0; i<array.length; i++){
// 		if(array[i]===array[i].toUpperCase()){
// 			newarray.push(array[i].toLowerCase())
// 		} 
// 		else{newarray.push(array[i].toUpperCase())}
// 	}
// var newword = newarray.join('')
// console.log(newword)
// }
// swapCase("Hello")


 // firstReverse = function(input){
 // 	var array = input.split('')
 // 	var newarray = []
 // 		for(i=array.length; i>=0; i--){
 // 			newarray.push(array[i])
 // 		}
 // 	var newword = newarray.join('')
 // 	console.log(newword)
 // }
 // firstReverse("What's up")

 



























































