
// JSON Object Create

let person1 ={ 
	"name": "Awhona Ahmed",
	"age": 21,
	"homeTown": "Chittagong",
	"married": false
};
// We are not allow to write hard JSON code on the JavaScript. 
// for that reason it yield same result like javascript object show.

var person1_json =  JSON.stringify(person1);
console.log(person1_json);

const person1_obj = JSON.parse(person1_json);
console.log(person1_obj);
// JS Object Create

const person2 ={
	name: "Md.Sujon Ahmed",
	age: 24,
	homeTown: "Dhaka",
	married: false
};


/**
 * JavaScript er moddhe JSON hard code kora jay na error khabo
 */


