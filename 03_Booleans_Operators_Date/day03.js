

let numOne = 4;
let numTwo = 3;

let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remi = numOne % numTwo;
let powerOf = numOne ** numTwo;
console.log("\n\nAssignment operators\n")
console.log("sum = "+ sum, "diff = "+ diff, "mult" + mult, "div =" + div, "remi =" + remi, "poweof =" + powerOf);




//Let us calculate area of a circle
const PI = 3.14;
let radius = 10;


const areaOfCircle = PI * radius * 10;
console.log(areaOfCircle);

const boilingPoint = 100;
const bodyTemp = 37;



// template literature way
console.log(`water boiling is ${boilingPoint} oC. \n Human body Temp is ${bodyTemp}`)

console.log(3 === '3');
// console.log('mango'.length == 'avocado'.length );

console.log("check")
console.log('mukesh'.length  !== 'rakesh'.length);



// Logical Operators

// const check = 4 > 3 && 1 > 5
// const check = 4 > 3 || 6 > 5
const check = (5 > 3)

console.log("logical operator = " + check);
let number = 5;
(number > 0)
? console.log(`${number} is a positive number`)
: console.log(`${number} is a negative number`);



// increment operators

let count = 0;
console.log(count++)
console.log(count);

// current year

// const now = new Date();
// console.log(now.getFullYear());



// ---------------------------Day 3: Exercises-------------------------------------------

// to check different data types

console.log("\n\nDay 3: Exercises\n\n<--- to check different data types.--->\n");
let firstName = "Mason";
let lastName = "Html";
let city = "Jaipur";
let age = 25;
let isMarried = false;
let year = 2023;


console.log(`fName = ${typeof firstName} \n lastName = ${typeof lastName}\n city = ${typeof city}\n isMarried = ${typeof isMarried}\n year = ${typeof year}` )

// Check if type of '10' is equal to 10

let strCheck = "10";
let numCheck = 10;
console.log('\nCheck if type of ');
console.log(`strCheck is  ${typeof strCheck}`);
console.log(`numCheck is  ${typeof numCheck}`);
console.log(strCheck === numCheck);

// Check if parseInt('9.8') is equal to 10

let strFloat = '9.8';
let strFloatInt = parseFloat(strFloat);
let strInt = 10;

console.log(`strFloat is ${ typeof strFloat } ${strFloat}`);

console.log(`strFloatInt is ${typeof strFloatInt} ${strFloatInt}`);

console.log(strFloatInt == strInt);


const now = new Date ();
console.log(now.getFullYear());
console.log(now.getDate());

let firstNames = "Asabeneh";
let lastNames = "Yetayeh";
// let compareLength =firstNam.length == lastNam.length

// if(compareLength==true){
//     console.log("Your first name, Asabeneh is longer than your family name, Yetayeh")
// }
// else{
//     console.log("Your first name, Asabeneh is not longer than your family name, Yetayeh")


// }

//  ------------------other method---------------


// if ( firstNames.length == lastNames.length){

//     console.log("Your first name, Asabeneh is longer than your family name, Yetayeh")
// }
// else{
//        console.log("Your first name, Asabeneh is not longer than your family name, Yetayeh")
// }

// ---------------------------second method---------------------------------

( firstNames.length == lastNames.length)
? console.log("true")
: console.log("Your first name, Asabeneh is not longer than your family name, Yetayeh")


