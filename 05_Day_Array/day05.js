// array
const arr = [];
console.log("Empty Array" + arr)

// How to create an array with values 
const numbers = [22, 20, 19, 18, 17];
// const fruits = ['banana', 'Potato', 'mango', 'lemon'];
const webTech = ['HTML', 'CSS', 'JS', 'REACT', 'REDUX', 'NODE'];

console.log('\nNumbers:' + numbers);
console.log('Number of numbers: ' + numbers.length);

// console.log('\nfruits:' + fruits);
// console.log('Number of fruits: ' + fruits.length);

console.log('\nwebTech:' + webTech);
console.log('Numbers of webTech ' + webTech.length);


let js = 'javascript';
const charInJavascript = js.split('');
console.log('\nString to Array conversion : ' + charInJavascript);

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM';
const companies = companiesString.split(',');

console.log(companiesString);


let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const words = txt.split(' ');

console.log(words);

// access the array itmes

const fruits = ['banana', 'Potato', 'mango', 'lemon','Papaya'];
let accessFruits = fruits.length-1;
let lastFruit =  fruits[accessFruits]


console.log(lastFruit);


const number = [0, 3.14, 9.8, 37, 98.6, 100];
console.log( 'number length: '+ number.length)
console.log( 'number: '+ number)
console.log( 'number index: '+ number[1]);
console.log( 'number 5: '+ number[5]);

let lastindex = number.length-1;
console.log( 'last Number: ' +number[lastindex]);


// Modifying array element
const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark'];

countries[0] =  'Japan';
let lastIndexs = countries.length-1;
countries[lastIndexs] = 'Korea';

console.log('\nCountries: ' +countries + '\n');



// Methods to manipulate array ______________________   

// Concatenating array using concat

let firstList = [1,2,3,4,5];
let secondList = [6,7,8,9,10];
let thirdList = firstList.concat(secondList);

// console.log(thirdList);
// console.log( 'Include Method check item is exist: ' + firstList.includes(1));
// console.log("Join Method: " + firstList.join(' '))


// ? slice array

console.log('\nSlice Method: ' + firstList.slice(1,4))


// Splice method in array
// It takes three parameters:Starting position, number of times to be removed 
// and number of items to be added.

console.log('\n Splice Method: ' +firstList.splice(0,4));



// Adding item to an array using push
// adding item in the end. To add item to the end of an existing array we use the push method.

const ar = ['item1', 'item2', 'item3'];
ar.push('new item');

console.log('\nAdding item using push :' + ar);

const nus = [1, 2, 3, 4, 5, 6];
nus.push(7, 'new');
console.log(nus) 


// pop: Removing item in the end.
const num = [1,2,3,4,5,6,7,8];
num.pop();
console.log(num);
console.log('Pop Method : ' + num)

// num.splice(3,3,6,8,9);
// console.log('splice Method : ' + num +'\n')


// Shift Method
// shift: Removing one array element in the beginning of the array.
num.shift();
console.log(`\n shift method ${num} \n`)


// unshift 
//  Adding array element in the beginning of the array.

num.unshift(0,3);
console.log(`\n unshift method ${num}`);

// Reversing array order
num.reverse()
console.log('Reverse Method :' + num );

// Sorting elements in array

num.sort();
console.log('Sorting Method ' + num);



// Exercise: Level 1

console.log('\n Exercise: Level 1');

let ab = [];
console.log(ab);

ab = [1,2,3,4,5];
console.log(ab);
console.log(`\nLength of array ${ab.length}`);

ab.shift();
console.log(`removing first using shift ${ab}`);

// Get the first item, the middle item and the last item of the array
let a = [1,3,5,4,6];
 let first = a[0];
 let last =  a.length - 1;
 let middle = a[Math.floor(a.length / 2)];
 console.log(first, last, middle );


//  Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
 
let mixedDataTypes = [2,4, 'HTML'];

let b= mixedDataTypes.length
console.log(b);



