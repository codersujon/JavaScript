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


