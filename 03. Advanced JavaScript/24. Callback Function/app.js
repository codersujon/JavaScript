/**
 * Callback Function
 */

// Akta function er vitor aro akta function use korai callback function
//setTimeout is a function er vitore abr akti anonimous funciton

/*setTimeout(function(){
	console.log('Hello World');
},3000);*/


/**
 * Callback Function
 */
// 1s = 1000ms;


// A array of persons
let persons = [
    {firstName: 'Mahbuba', lastName:'Sultana'},
    {firstName: 'Md.Sujan', lastName: 'Ahemd'},
    {firstName: 'Habiba', lastName: 'Monty'}
];


//Create a Person Object
function createPerson(person, callback){
    setTimeout(function(){
         persons.push(person);
         callback();
    }, 1000);
}



// getData 
function getData(){
    setTimeout(function(){
        let output = '';
        persons.forEach(function(item){
            output += `<li>${item.firstName} ${item.lastName}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    }, 500);
}


//calling a function with passing a object as a argument
createPerson({firstName: 'Moynul', lastName:'Islam'}, getData);
createPerson({firstName: 'Abida', lastName:'Rahman'}, getData);