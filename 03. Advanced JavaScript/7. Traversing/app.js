/**
 * Traversing
 */

let val;

let list = document.querySelector('ul');
let listItem = document.querySelector('ul li:last-child');
val = list;
val = listItem;


//Get Child Nodes

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[1];
val = list.childNodes[3];
val = list.childNodes[1].nodeName;

val = list.childNodes[1].nodeType;
// 1 Element
// 2 Attribute
// 3 Text Node
// 8 Comment
// 9 Document itself
// 10 Doctype

val = list;
val = list.children[2];
val = list.children[0].textContent = 'Bangladesh';
val = list.lastElementChild;
val = list.childElementCount;
val = listItem;
val = listItem.parentElement;
val = listItem.parentNode;
val = listItem.parentNode.parentNode;

let listItem2 = document.querySelector('ul li:first-child');
val = listItem2;
val = listItem2.nextSibling.nextSibling;
val = listItem2.nextElementSibling;
val = document.querySelector('ul li:first-child');
val = val.previousSibling;
console.log(val);

