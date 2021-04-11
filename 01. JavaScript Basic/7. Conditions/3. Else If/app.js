/*
 1:
 ================================
	var i = prompt("Enter a value");

	if (i < 1) {
		document.write("i is smaller than 1");
	} else if(i < 2){
		document.write("i is smaller than 2");
	} else{
		document.write("i is greter than 2");
	}
*/

/*
 2:
 ================================
	var whatDay = prompt("Enter Day name:");

	if (whatDay === "sunday") {
		document.write(whatDay + " is normal working Day.");
	} else if(whatDay === "monday"){
		document.write(whatDay + " is normal working Day.");
	} else if (whatDay === "tuesday") {
		document.write(whatDay + " is normal working Day.");
	} else if (whatDay === "wednessday") {
		document.write(whatDay + " is normal working Day.");
	} else if (whatDay === "thursday") {
		document.write(whatDay + " is normal working Day.");
	} else {
		document.write(whatDay + " is not a day.");
	}
*/

/*
 3:
 ================================
	var person1 = "Jamal";
	var person2 = "Kamal";
	var areTheyBrother = true;

	if (person1 == "Jamal" && person2 == "Kamal" && areTheyBrother) {
		document.write("They are brother.");
	} else {
		document.write("They are not brother.");
	}
*/

/*
 4:
 ================================
	// Write a program to find positive and negative number.
	var m = prompt("Enter a Number");

	if (m >= 0) {
		var result  = "This number " + m  + " is a positive number.";
	} else {
		var result =  "This number " +  m + " is a negative number";
	}
	document.write(result);
*/



//Write a program to find Odd and Even number.

var n = prompt("Enter a Number");

if (n % 2 == 0) {
	var result = "This number " + n + " is an Even number.";
} else {
	var result  = "This number " +  n + " is an Odd number.";
}
document.write(result);