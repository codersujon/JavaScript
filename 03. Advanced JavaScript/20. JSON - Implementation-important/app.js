/**
 * JSON - Object and Array
 */

/* 
	Ajax Code:
	================================
 var xmlhttp = new XMLHttpRequest();
 xmlhttp.onreadystatechange = function(){
 	if (this.readyState == 4 && this.status == 200) {
 		
 	}
 };
 xmlhttp.open("GET", "data.json", true);
 xmlhttp.send();

*/


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
	if (this.readyState == 4 && this.status == 200) {
		const data = this.responseText;
		json_data(data);
	}
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();



function json_data(json_obj){
	var js_obj = JSON.parse(json_obj);
	for (x in js_obj.person) {
		const persons = js_obj.person;
		for (y in persons[x]) {
			console.log(persons[x][y]);
		}
	}
}