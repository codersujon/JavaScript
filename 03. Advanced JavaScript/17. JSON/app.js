/**
 * JSON- JavaScript Object Notation
 * ===== JSON is a syntax for storing and exchanging data
 */


//JS Object Format
let student = {
	name: "Md.Sujon Ahmed",
	age: 24,
	homeTown: "Dhaka"
};

//JSON Formate

/*let student_JSON = {
	"name": "Awhona Ahmed",
	"age": 21,
	"homeTown": "Chittagong"
}*/

/**
 * Direct js to JSON Convert using a  JSON.stringify() method
 */

var student_json = JSON.stringify(student);
console.log(student_json);


/**
 * JSON to JS Object Convert using parse() method
 */

var student_backJsObj = JSON.parse(student_json);
console.log(student_backJsObj);