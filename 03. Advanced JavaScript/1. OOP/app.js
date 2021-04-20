/**
 * Class: Class is a Template for creating Object
 */

/*let person1 ={
	firstName: 'Md.Sujon',
	lastName: 'Ahmed',
	dob: '29-11-1996',
	fullName: function(){
		console.log(`${this.firstName} ${this.lastName}`);
	}
};

let person2 ={
	firstName: 'Awhona',
	lastName: 'Ahmed',
	dob: '18-01-1998',
	fullName: function(){
		console.log(`${this.firstName} ${this.lastName}`);
	}
};

console.log(person1);
console.log(person2);
*/

/*class Person{
	constructor(fname, lname, dob){
		this.firstName = fname;
		this.lastName = lname;
		this.dob = dob;
	};
	fullInfo(){
		console.log(`${this.firstName} ${this.lastName} ${this.dob}`);
	}
};

let person1 =  new Person('Awhona', 'Ahmed', '18-01-1998');
let person2 = new Person('Md.Sujon', 'Ahmed', '29-11-1996');
let person3 = new Person('Habiba','Monty','25-02-1995');

console.log(person1.fullInfo());
*/


let cat = {
	name : 'Kitty',
	age: '2years'
};



class Cat{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	catDetails(){
		console.log(`${this.name} ${this.age}`);
	}
}


let cat1 = new Cat('Hot Wheels', '4years');
console.log(cat1.catDetails());

let cat2 = new Cat('Puffalump', '5years');
console.log(cat2.catDetails());




class Scale{
	constructor(name, inche,price){
		this.name = name;
		this.inche = inche;
		this.price = price;
	}
	info(){
		console.log(`${this.name} ${this.inche} ${this.price}`);
	}
}

let scale01 = new Scale('Stainless', '12inche', 35);
console.log(scale01.info());

