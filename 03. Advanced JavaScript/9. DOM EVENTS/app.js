
/*
const container = document.querySelector('#downloadCv').addEventListener('click', message);
document.querySelector('.container').style.background = 'red';
function message(a){
	let val = a;
	val = a.offsetY;
	val = a.offsetX;
	console.log(val);
}
console.log(downloadCv);*/


/*const container = document.querySelector('.container').addEventListener('click', test);
document.querySelector('.container').style.background = 'red';

function test(a){
	this.style.background = `#${a.offsetX}`;
}
*/

/*let readMore = document.getElementById('readMore');
readMore.addEventListener('click', msg);
function msg(){
	document.write(`<h1>Welcome Md.Su<h1/>`);
}
console.log(readMore);*/


document.querySelector('#name').addEventListener('focus', test);
document.querySelector('#name').addEventListener('keyup', test1);

function test(){
	this.style.background ='#F6F6F6';
	this.style.border ='2px solid green';
}
function test1(){
	document.getElementById('demo').innerText = this.value;
}