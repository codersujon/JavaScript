/**
 * JSON Suporrted- Data Types of JS
 * https://jsonlint.com
	 * String
	 * Number
	 * Object (JSON Object)
	 * array
	 * boolean
	 * Null
 */

/**
 * JSON- Doesn't Support
 * Date Type 
 * Undefined
 * function or method 
 */

var person = {
	name: "Maruf Shobo", // string
	age: 26, //number
	homeTown: "Dhaka", //string
	married: false, //boolean
	dob: 1996-11-29, // Date formate data type
	test_null: null, //null
	test_undefine: undefined, //undefined
	greet: function(){ // method or function
		console.log(`Hello ${this.name}`);
	}
};


console.log(person.greet);

/**
 * This JS Object to JSON convert
 */

 let person_json =  JSON.stringify(person);
 console.log(person_json);