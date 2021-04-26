/**
 * Error Handling
 */

// JavaScript Error Handling Metho two types one is Try and Catch


/*console.log("Before Error");

console.log("After Error");

try {
	// test();
	// undefined.test();
} catch(e) {
	console.log(e.message);
	console.log(e.name);
} finally{
	console.log("I am inside Finally");
}*/

let a = Number(prompt('Enter a number'));

try {
	if(a > 15) throw "Too Big Number";
	else if(a < 2 ) throw "Too Small Number";
	else throw "This is a Perfect Number";
} catch(error) {
	console.log(error);	
}