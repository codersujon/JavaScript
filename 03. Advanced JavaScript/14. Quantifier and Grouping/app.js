/**
 * Regular Expression
 * Character Set Using Brackets []
 */



let re;
 re = /h[ea]llo/; //Must be one of them inside bracktes
 re = /[ha]ello/i;
 re = /[^ha]ello/;
 re = /^[ha]ello/;
 re =  /[a-z]ello/; //range
 re =  /[a-f]ello/;
 re = /[A-Z]ello/;
 re = /^[A-Z]ello/; // First letter must be satart with Uppercase
 re = /^[a-h]/;
 re = /[A-Za-z]ello/;
 re = /[0-9]ello/;
 re = /^[0-9]/;
 re = /[^0-9]ello/;
 re = /^[0-9][0-9]hello/;
 re = /^[0-9][0-9][0-9][0-9][0-9]hello/;


 //Curly Bracess {} - Quantifier
 re = /sujo{3}n/;
 re = /hel{2,5}o/; // l minimum 2 times and maximum 5 times
 re = /hel{2,}o/; // al least 2 times



 // Parentheses - Grouping
 re = /^([0-9]){5}hello/;

 //Bangladeshi Phone Number Checking
 // $- sign meand ai string e number dia i ses hobe
 re  = /^01[0-9]{9}$/;
 re =  /^\+8801[0-9]{9}$/;
 re  = /^([0-9]xy){3}/;
let str;


str = "+8801716259641";
str = "2xy3xy4xy5xy";
console.log(re.exec(str));




function reTest(re, str){
	if(re.test(str)){
		console.log(`${str} matches ${re.source}`);
	}else{
		console.log(`${str} doesn't match ${re.source}`);
	}
}
reTest(re, str);