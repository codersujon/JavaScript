let person = {
	firstName: 'Md.Sujon',
	lastName: 'Ahmed',
	age: 50,
	eyeColor: 'blue',
	fullName: function(){
		return `${this.firstName} ${this.lastName}`;
	}
};

console.log(person.firstName);
console.log(person.fullName());


let webDesign = {
	html: 'Hyper Text Markup Language',
	css: 'Cascading Style Sheet',
	js: 'javaScript',
	frontEndDeveloper: function(){
		return `${this.html} ${this.css} ${this.js} is used to be a Front End Developer`;
	}
} 

console.log(webDesign.html);
console.log(webDesign.frontEndDeveloper());