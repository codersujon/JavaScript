/**
 * Normal Function or Function Statement
 */

function agePrint(age){
	console.log(`Your age is ${age}`);
}
//agePrint(40);

/**
 * Function Expression
 */

let agePrint1 = function(age){
	console.log(`My age is ${age}`)
}

//agePrint1(24);

/**
 * Arrow Funciton (ES6)
 */

let agePrint2 = age3 =>{
	console.log(`My Father age is ${age3}`);
}

//agePrint2(55);


	(function(value ='', today = '', sehri = '', iftar = ''){
		document.write(`
				Welcome ${value}, 
				Date: ${today}, 
				Sehri:${sehri}, 
				Iftar: ${iftar}`
			);
	})('Ramadan 2021', new Date('Apr 14 2021'), '4.15am', '6.23pm');


