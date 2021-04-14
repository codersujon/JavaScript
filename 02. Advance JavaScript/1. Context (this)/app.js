name = 'Awhona Ahmed'
var myCustomObj = {
	name: 'Md.Sujon Ahmed',
	age: 24,
	job: 'Jobless Pepole',
	anotherObj: {
		name: 'Habib',
		msg: function(){
			console.log('My name is ' + this.name);
		}
	}
};

myCustomObj.anotherObj.msg();