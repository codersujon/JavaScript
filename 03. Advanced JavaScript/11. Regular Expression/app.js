/**
 * Regular Expression
 */

//Pattern Matching Technique

//Regular Expression Declaration 
/*let regularExpression;
regularExpression = /positive/;
regularExpression = /Positive/i;
console.log(regularExpression);
console.log(regularExpression.source);


let str;
str = 'positive Bangladesh';
str = 'again positive world';
str = 'df positive dkfjdkf';
str = 'Again positive World and Again Hello Bangladesh';
str = 'Again positive World and Again Hello Bangladesh';
str = 'hello';
//exec()
let result = regularExpression.exec(str);
console.log(str);
console.log(result);*/

// Result hole akti array return korbe, r na korle null return korbe
// 

/**
 * Test Function niya regular expression check
 */

/*let regularExpression;
regularExpression = /positive/;
regularExpression = /Positive/i;
console.log(regularExpression);
console.log(regularExpression.source);


let str;
str = 'pos Bangladesh';
str = 'positive Bangladesh';
//test()
let result = regularExpression.test(str);
console.log(str);
console.log(result);
*/

/**
 * Match Function niya regular expression check
 */

/*let regularExpression;
regularExpression = /positive/;
regularExpression = /Positive/i;
console.log(regularExpression);
console.log(regularExpression.source);


let str;
str = 'pos Bangladesh';
str = 'positive Bangladesh';
str = 'ddd Bangladesh';
//match()
let result = str.match(regularExpression); // Likhar niom change
console.log(str);
console.log(result);*/

/**
 * Search Function niya regular expression check
 */

/*let regularExpression;
regularExpression = /positive/;
regularExpression = /Positive/i;
console.log(regularExpression);
console.log(regularExpression.source);


let str;
str = 'pos Bangladesh';
str = 'positive Bangladesh';
str = 'Bangladesh positive';
//match()
let result = str.search(regularExpression); // Likhar niom change
console.log(str);
console.log(result);*/


/**
 * replace Function niya regular expression check
 */

let re;
re = /bangladesh/i;
console.log(re);
console.log(re.source);


let str;
str = 'bangladesh';
let result = str.replace(re, 'Hi');
console.log(result);