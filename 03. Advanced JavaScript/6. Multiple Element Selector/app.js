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

