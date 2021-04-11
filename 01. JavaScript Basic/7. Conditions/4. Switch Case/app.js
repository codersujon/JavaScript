/*
 1:
 ================================
	var value = 1;

	switch (value) {
		case 1:
			document.write("I will always run");
			break;
		case 2:
			document.write("I will never run");
			break;
	}
*/

/*
 2:
 ================================
	
*/


var weekDay  = prompt("Enter a Day");

switch (weekDay) {
	case 'saturday':
	case 'Saturday':
	case 'SATURDAY':
	document.write(weekDay + "!" + " It is closed today.");
	break;

	case 'sunday':
	case 'Sunday':
	case 'SUNDAY':
	document.write(weekDay + "!" + " It is working day.");
	break;

	case 'monday':
	case 'Monday':
	case 'MONDAY':
	document.write(weekDay + "!" + " It is working day.");

	break;
	case 'tuesday':
	case 'Tuesday':
	case 'TUESDAY':
	document.write(weekDay + "!" + " It is working day.");
	break;

	case 'wednessday':
	case 'Wednessday':
	case 'WEDNESSDAY':
	document.write(weekDay + "!" + " It is working day.");
	break;

	case 'thursday':
	case 'Thursday':
	case 'THURSDAY':
	document.write(weekDay + "!" + " It is working day.");
	break;

	case 'friday':
	case 'Friday':
	case 'FRIDAY':
	document.write(weekDay + "!" + " It is closed today.");
	break;
}