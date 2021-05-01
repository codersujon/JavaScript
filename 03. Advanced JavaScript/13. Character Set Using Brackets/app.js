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
let str;


str = "89hello";
console.log(re.exec(str));




function reTest(re, str){
	if(re.test(str)){
		console.log(`${str} matches ${re.source}`);
	}else{
		console.log(`${str} doesn't match ${re.source}`);
	}
}
reTest(re, str);