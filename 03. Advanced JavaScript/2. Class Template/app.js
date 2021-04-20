/**
 * Sub Class & Inheritance
 */


class Person{ //Base Class
	constructor(fname, lname){
		this.firstName = fname;
		this.lastName = lname;
	}
	greeting(){
		console.log(`Hello ${this.firstName} ${this.lastName}`);
	}
}

class Customer extends Person{ //Sub Class
	constructor(fname, lname, phone, memberShip){
		super(fname, lname);

		this.phone = phone;
		this.memberShip = memberShip;
	}
	fullName(){
		console.log(`Welcome ${this.firstName} ${this.lastName}`);
	}
}


//Object Create
let person1 = new Person('Md.Sujon', 'Ahmed');
console.log(person1.greeting());

let person2 = new Customer('Awhona', 'Ahmed', 01680366446, 102);
console.log(person2);
console.log(person2.greeting());
console.log(person2.fullName());


Person class ke inherite korlam subclass Customer e

base class and subclass full ghotona is call Inheritance;