/**
 * DOM Selector-Multiple Slector
 */

/*let list = document.getElementsByClassName('sample-class');
list[1].style.background = 'red';
list[1].style.color = 'white';
list[1].style.padding = '15px';
console.log(list[1]);*/



let list = document.getElementsByTagName('li');
/*console.log(list[5]);*/
list = document.querySelector('ul').getElementsByTagName('li');
list[0].style.background = 'yellow';
console.log(list[0]);



//document.querySelectorAll()****
// id -> #
// class -> .
// tag -> tag name

let list1 = document.querySelectorAll('.sample-class');
	list1 = document.querySelectorAll('ul li');

	list1.forEach(function(item){
		//console.log(item)
	});

let liOdd = document.querySelectorAll('li:nth-child(odd)');
liOdd.forEach(function(item){
	item.style.background = 'orange';
	item.style.color = 'white';
});

let lieven = document.querySelectorAll('li:nth-child(even)');

lieven.forEach(function(item){
	item.style.background = 'green';
	item.style.color = '#fff';
	item.style.padding = '10px';
});
console.log(liOdd);