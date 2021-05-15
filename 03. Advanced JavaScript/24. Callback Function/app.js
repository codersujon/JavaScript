/**
 * Callback Function
 */

// Akta function er vitor aro akta function use korai callback function
//setTimeout is a function er vitore abr akti anonimous funciton

/*setTimeout(function(){
	console.log('Hello World');
},3000);*/


let persons = [
	{firstName: 'Awhona', lastName: 'Ahmed'},
	{firstName: 'Sujon', lastName: 'Ahmed'}
];


function createPerson(person, callback){
	setTimeout(function(){
		persons.push(person);
		callback();
	},2000)
}


function  getData(){
	setTimeout(function(){
		let output = '';
		persons.forEach(function(item){
			output += `<li>${item.firstName} ${item.lastName}</li>`;
		})
		document.getElementById('output').innerHTML =  output;
	},500)
}


createPerson({firstName:'Riad', lastName:'Mahmud'}, getData);
createPerson({firstName:'Atikiya', lastName:'Anika'}, getData);