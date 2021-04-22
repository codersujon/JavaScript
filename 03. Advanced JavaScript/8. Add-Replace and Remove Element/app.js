/**
 * Add Element
 */


/*let ulItem = document.createElement('li');
//Add Class name
ulItem.className = 'a new begin';
//Add id
ulItem.id = 'myid';

//Set atttribute
ulItem.setAttribute('href', 'https://www.google.com');

//Add content
ulItem.appendChild(document.createTextNode('Java'));
document.querySelector('ul').appendChild(ulItem);*/

//Add Element
let ulItem = document.createElement('li');
let linkItem = document.createElement('a');
linkItem.setAttribute('href','https://www.codersujon.com');
linkItem.setAttribute('target', '_blank');
linkItem.appendChild(document.createTextNode('CoderSujon'));
ulItem.appendChild(linkItem);
document.querySelector('#programming-lan').appendChild(ulItem);


//Repalce tag name or element
let newHeading = document.createElement('h1');
 newHeading.appendChild(document.createTextNode('Thi is our h1 Heading'));
 newHeading.className = 'simple-class';
 newHeading.id = 'main';
let oldHeading = document.querySelector('h2');

let parenetDiv = document.querySelector('.container');

parenetDiv.replaceChild(newHeading, oldHeading);
console.log(parenetDiv);

//Remove Element

let listItem = document.querySelectorAll('li');
listItem[2].remove();

let ulList = document.querySelector('.sample-class');
let ulListItem = document.querySelectorAll('li');

ulList.removeChild(ulListItem[4]);
ulList.classList.add('new');
ulList.classList.remove('sample-class');
ulList.setAttribute('title', 'new title');
console.log(ulList);

let check = ulList.hasAttribute('title');
console.log(check);
