
/**
 * Global Scope
 */

var a = 1;
let b = 100;
const c = 90;
var d  = 50;
console.log(`Global Scope:`, a, b, c);


//Function create

function test(){ //Local Scope or Function Scope
	var a = 4;
	let b = 20;
	const c = "Md.Sujon Ahemd";
	var romadan = "Rahmat"
	console.log(`Function Scope: `, a, b, c, d);
}

test();

if(true){//Local Scope or If Scope
	let a = 50;
	let b = 630;
	const c =  "Awhona Ahmed";
	var d = 40;
	console.log(`Function Scope: `, a, b, c)
}


if (true) {
	var alif = 50;
	let ba = 20;
	const cha = 100
	var zim = 500;
	console.log(`If Scope: `, alif, ba, cha, zim);
}
console.log(`Global Scope: `, a, b, c, zim);


for(var a = 0; a < 10; a++){
	console.log(`Loop Scope: `, a);
}
console.log(`Global Scope: `, a, b, c);