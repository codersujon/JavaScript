/**
 * DOM Selector-Single Element Selector
 */

//Getting an Element
let val;
val = document.getElementById('document-title');
val = document.getElementById('document-title').id;
val = document.getElementById('document-title').className;
console.log(val);

//Changing Style or Applying any CSS style
document.getElementById('document-title').style.background = 'red';
document.getElementById('document-title').style.color = '#fff';
document.getElementById('document-title').style.padding = '10px';
document.getElementById('document-title').style.marginTop = '100px';

// Content Change
document.getElementById('document-title').textContent = 'This is our Content';
document.getElementById('document-title').innerText = 'Heading tag';

//Adding HTML Tag
document.getElementById('document-title').innerHTML = '<i>Hello World</i>';
document.getElementById('document-title').innerHTML = '<a href="www.google.com">Google</a>';


// Easy Way

let val1 = document.getElementById('document-title');

	val1.style.background = 'green';
	val1.innerText = 'This is our Content';
	val1.style.color = 'yellow';


/**
 * Document.querySelector; // Only Single Element Selector
 */

	val = document.querySelector('#document-title'); //id
	val.style.color = '#fff';
	val.style.background = 'red';


	val = document.querySelector('h2'); // tag
	val.style.background = 'orange';


	val = document.querySelector('ul'); 
	val.style.background = 'green';
	val.style.padding = '25px';
	val.style.color = '#fff';


	val = document.querySelector('ul li:nth-child(3)'); // child 
	val.style.background = 'yellow';
	val.style.color = '#000';


	val = document.querySelector('.siam'); // Class
	val.style.background = '#ddd';


	    
