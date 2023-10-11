console.log("My First Console")
// 
let name="mukesh";
name="yadav";
console.log(name);

// variable tyye
// primitives
let lastName = "yadav";   // string
let age = 69;             // integer
let isApproved ="false"    // boolean
let firstName = undefined // undefined
let seclectedColor = null // in case value will be change like select the color red

// Reference types

// 1. Object
// 2. Array
// 3. Function

// Object

let person ={
name: "MK",
age: 30

};
console.log(person)

// if want to access the properties like name / age 
// we have two method to access the properties

// 1.Dot notation
person.name="KM";
person.age ="34"

console.log(person.name)
console.log(person.age)


// 2.Breaket notation

// this use for if you don't know the obeject properties/ dyanmic the name value/run time by the user
let section= "name"; 
person[section]= "sita"
// end
/*  or    */ 
person["name"]="ram"
console.log(person.name)



//  Array

let seclectColor=['red', 'green'];
seclectColor[2]='black';
console.log(seclectColor)

// Examples of declared variables

let x="web",job="designer";
console.log(x,job)


// Day 1: Exercises


 
// 3 Create a variable.js file and declare variables and assign string, boolean, undefined and null data types

let a="web";
let b=false;
let c=undefined;
let d=null;

console.log('a='+a, '\nb='+b, '\nc='+c, '\nd='+d )


// 6 Declare four variables without assigning values

let z;
let y= "";

 z = 10;
 z = '3';

// Declaration 
// Assignment
// override 


// 7. Declare four variables with assigned values

let name_s='star', age_s=5, condition=true, income=null 


// 9 Declare variables to store your first name, last name, marital status, country and age in multiple lines

let FirstName= "Web";
let LastName = "Desginer";
let maritalStatus= "Married";
let country = "India";
let ages= 30;

console.log('\n\n\n\nFirstName='+ ' ' +FirstName, '\nLastName='+ LastName, '\nmaritalStatus=' +maritalStatus, '\ncountry=' +country, '\nages='+ages)

// 10. Declare two variables myAge and yourAge and assign them initial values and log to the browser console.

let myAge= "25";
let yourAge="30";

console.log('I am'+ ' ' +myAge+ 'years old.', '\nYour age '+ yourAge+ ' ' +'years old.')
