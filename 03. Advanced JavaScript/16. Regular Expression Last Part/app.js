/**
 * Regular Expression 
 * ============== Some Example
 */
 /*//Postal Code
 re = /^[0-9]{4}$/;

 //Phone Number --> 01680366446, +8801680366446 or 8801680366446
 re = /^01[0-9]{9}$/; // for 01680366446
 re = /^\+8801[0-9]{9}$/;
 re = /^(\+88)?01[0-9]{9}/;
 re = /^(\+)?(88)?01[0-9]{9}/;
  */




let re;
//Email -->sujon.learn@edu.com
re = /^([a-zA-Z0-9]\.?)+([a-zA-Z0-9])+@([a-zA-Z0-9].?)+[^\.]$/;
re = /^([a-zA-Z0-9])+@gmail\.?([a-zA-Z0-9])+[^\.]$/;
re = /^([a-zA-Z0-9])+@([a-zA-Z0-9]\.?)+[^\.]$/;
let str;

str = "sujon.learn@edu.com";
str = "csesujon155@gmail.com";
str = "marufshubo@gmail.com";
str = "info@islamibank.com";
str = "sujon@positiveworld.com";
console.log(re.test(str));



