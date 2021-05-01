/**
 * Regular Expression
 * ============== Shorthand Character and Asserations
 */



let re;
 re  = /x(?=y)/; // matches x only if x is before y
 re = /x(?=yz)/;
 re  = /x(?!y)/;
 /*re  = /\w/; // Word Character means Alpha, Numeric or Underscore
 re = /\w+/; // One or more show krbe
 re = /\W/; // Non Word Character
 re = /\W+/; // Non Word Character one or More
 re = /\d/; // Digit
 re = /\d+/; // One or More Digit show
 re = /\D/; // Non Digit Characters
 re = /\s/; // Only WhiteSpace
  re = /\bhello\b/; // word boundary only space working first and end e
 re = /\S/; */



let str;
/*str = "+01716259641";
str = "(*^_dfdsfa";
str = "(*^_dfdsfa";
str = "dfdfa(";
str = "dfdfa(dfd^";
str = "ass5";
str = "asdfd56dfds5";
str = "5455";
str = "hello world";
str = " hello ";
str = "hello";*/

str  = "dfsdxyzafa"
str  = "dfsdxoyafa"
console.log(re.exec(str));




function reTest(re, str){
	if(re.test(str)){
		console.log(`${str} Matches ${re.source}`);
	}else{
		console.log(`${str} doesn't match ${re.source}`);
	}
}
reTest(re, str);