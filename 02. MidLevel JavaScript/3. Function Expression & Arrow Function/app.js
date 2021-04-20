/**
 * Normal Function or Function Statement
 */

function agePrint(age){
	console.log(`Your age is ${age}`);
}
//agePrint(40);

/**
 * Function Expression
 */

let agePrint1 = function(age){
	console.log(`My age is ${age}`)
}

//agePrint1(24);

/**
 * Arrow Funciton (ES6)
 */

let agePrint2 = age3 =>{
	console.log(`My Father age is ${age3}`);
}

//agePrint2(55);

/*
	(function(value ='', today = '', sehri = '', iftar = ''){
		document.write(`
				Welcome ${value}, 
				Date: ${today}, 
				Sehri:${sehri}, 
				Iftar: ${iftar}`
			);
	})('Ramadan 2021', new Date('Apr 14 2021'), '4.15am', '6.23pm');*/



/*
	const date = new Date();
	const ramadan = {
		msg: 'Rahmat Ramadan 2',
		date: date.toLocaleString(),
		sehri: '4.14am', 
		iftar: '6.24pm',
		dayPrint: function(){
			return `${this.msg} | Date: ${this.date} | Sehri: ${this.sehri} | Iftar: ${this.iftar}`;
		}
	}
	document.write(ramadan.dayPrint());
*/




/*//Arrow Funciton

const ramadan2021 = (msg, date, sehri, iftar) => {
	document.write(`${msg}, ${date} | Sehri: ${sehri} | Iftar: ${iftar}`);
}
ramadan2021('Rahmat Ramadan 3', '16-03-2021', '4.13am', '6.24pm' );*/



//Class Template

/*class Ramadan2021{
	constructor(day, date, fazilat, sehri, iftar){
		this.day = day;
		this.date = date;
		this.fazilat = fazilat;
		this.sehri = sehri;
		this.iftar = iftar;
	}
	fullFasting(){
		console.log(`
			Day: ${this.day} 
			Date: ${this.date} 
			Fazilat: ${this.fazilat} 
			Sehri: ${this.sehri}
			Iftar: ${this.iftar}
			`);
	};
};

const ramadan5 = new Ramadan2021(
	'Ramadan 4', '18-04-2021', 
	'রোজাদারকে...', '4.11am', '6.25pm');
console.log(ramadan5.fullFasting());
*/

class Ramadan2021{
	constructor(day, sehri, iftar){
		this.day =  day;
		this.sehri = sehri;
		this.iftar = iftar;
	}
	fullFasting(){
		console.log(` Day: ${this.day}, 
			Sehri: ${this.sehri}, 
			Iftar: ${this.iftar}`);
	}
}

class Roja extends Ramadan2021{
	constructor(day, sehri, iftar, date, fazilat){
		super(day, sehri, iftar);

		this.date = date;
		this.fazilat = fazilat;
	}
	printfasting(){
		console.log(`
			Date: ${this.date} 
			Fazilat: ${this.fazilat}`);
	}
}

let roja7 = new Roja('Ramadan 7', '4.09am', '6.26pm', '20-04-2021', 'ফিরাউনের... ');
console.log(roja7.fullFasting());
console.log(roja7.printfasting());