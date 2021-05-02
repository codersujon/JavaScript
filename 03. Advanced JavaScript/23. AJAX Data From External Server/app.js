/**
 * AJAX - Asynchronous Programming and XML // Get data Without Loading the page
 * Synchronous Programming
 * Asynchronous Programming
 */


document.getElementById('get_data').addEventListener('click', loadData);

function loadData(){
	//Create XHR(xml http request) Object which is built in class of AJAX
	
	let xhr = new XMLHttpRequest();
	// console.log(xhr);
	xhr.open("GET", "data.txt", true);
	xhr.onload =  function (){
		if (this.status === 200) {
			// console.log(this.responseText);
			document.getElementById('output').innerHTML = `<h3>${this.responseText}</h3>`;
		}
	}
	xhr.send();
	// console.log(xhr);
}