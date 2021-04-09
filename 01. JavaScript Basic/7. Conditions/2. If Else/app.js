/*
 1:
 ================================
 var age = prompt("Enter your age:");

 if (age > 18) {
 	document.write("You are adult.");
 } else {
 	document.write("You are not adult.")
 }

*/

/*
 2:
 ================================
 var i = prompt("Enter a value");

 if (i < 1) {
 	document.write("i is smaller than 1");
 } else {
 	document.write("i is greater than 1");
 }

*/


// Here we use Nesting If Else

var i = prompt("Enter a value");

 if (i < 1) {
 	document.write("i is smaller than 1");
 } else {
 	if (i < 2) {
 		document.write("i is smaller then 2");
 	} else {
 		document.write("i is greter than 2");
 	}
 }
