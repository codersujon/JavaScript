/**
 * AJAX - Data From External Server
 * API- Application Programming Interface
 * Restfull API
 */

document.getElementById('get_jokes').addEventListener('click', loadJokes);

function loadJokes(){

	let number = document.getElementById('numberJokes').value;
	console.log(number);

	let xhr = new XMLHttpRequest();
	console.log(xhr);
	xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);

	xhr.onload = function(){
		if (this.status === 200) {
			let data = JSON.parse(this.responseText);
			const joke = data.value.joke;
			console.log(data);
		}
	}
	xhr.send();
}