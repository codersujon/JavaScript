/**
 * JSON - Practise
 */


var xmlhttp = new XMLHttpRequest();
 xmlhttp.onreadystatechange = function(){
 	if (this.readyState == 4 && this.status == 200) {
 		const data = this.responseText
 		myFun(data);
 	}
 };
 xmlhttp.open("GET", "data.json", true);
 xmlhttp.send();


function myFun(json_obj){
	var js_obj = JSON.parse(json_obj);
	for(x in js_obj.person){
		const person = js_obj.person;
		for (y in person[x]) {
			console.log(person[x][y]);
		}
	}
}