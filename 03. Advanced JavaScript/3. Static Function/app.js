
class Person{
	constructor(fname, lname){
		this.firstName = fname;
		this.lastName = lname;
	}
	//Anonymous Function
	greeting(){
		console.log(`${this.firstName} ${this.lastName}`);
	}
	//Static Function
	static test(){
		console.log(`I'm a Static Function`);
	}
};

let person1 = new Person('Md.Sujon', 'Ahmed');
console.log(person1.greeting());
console.log(Person.test());