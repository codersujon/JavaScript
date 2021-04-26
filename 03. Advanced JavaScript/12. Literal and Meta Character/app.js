/**
 * Literal and Meta Character
 */

let re;
//Literal Character Checking
re = /hello/i;
re = /hell/i;
let str;



//Meta Character
re = /^hello/ 	// Must Start with
re = /hello$/ 	// Must End with
re  = /^hello$/ // Must Start and End with
re = /he.lo/   // . er position e any character must thaklei match korbe
re = /h*llo/   // * er position e 0 or more times(thakleo hobe na thakleo hobe ba onek gula holeo hobe)
re = /he?llo/  //Optional or Multiple Choose qustion mark er age ja ase ta hubohub thakte hobe
re = /hello?/

str = 'hello world ';
console.log(re.exec(str));




function reTest(re, str){
	if(re.test(str)){
		console.log(`${str} matches ${re.source}`);
	}else{
		console.log(`${str} doesn't match ${re.source}`);
	}
}

reTest(re, str);