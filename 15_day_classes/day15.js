// syntax
// class ClassName {
//     //  code goes here
// }

//-----------------------------------------------------------

// class Person {
//     a = 5 + 6
// }
// const person = new Person()
// console.log(person);

//-----------------------------------------------------------


//Class Constructor

// class Person {
//   
//     constructor(firstName, lastName) {
//         // console.log(this);
//         this.fName = "firstName"
//         this.lName = "lastName"
//     }

// }
// const person = new Person()
// console.log(person);


// constructor with parameters
// class Person {

//     constructor(firstName, lastName) {
//         this.fName = firstName
//         this.lName = lastName

//     }
// }
// const pers = new Person('Mason', 'HTML')
// console.log(pers);


// 


// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }
// }
// const person1 = new Person('Mason', 'Html')
// const person2 = new Person('Maxwall', 'React')
// const person3 = new Person('Billiy', 'WordPress')

// console.log(person1);
// console.log(person2);
// console.log(person3);


class Person {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
}
const person4 = new Person('Mason', 'Html', '25', 'finland', 'Helsinki')
console.log(person4);



// -----------------The constructor function properties may have a default value like other regular functions.----------------------------------------

class Ajay {
    constructor(
        firstName = 'ajay', lastName = 'html', age = '24', country = 'india') {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
    }
}

const person5 = new Ajay();
const person6 = new Ajay('raj', 'kundra', 30, 'USA')

console.log(person5);
console.log(person6);


//----------------- Class methods----------------

class Mason {
    constructor(firstName, lastName, age, city, country) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.city = city
        this.country = country
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
}
const mukesh = new Mason('Mukesh', 'Yadav', 24, 'Makrana', 'raj')
const manish = new Mason('manish', 'kumar', 30, 'mau', 'up')
console.log(mukesh.getFullName());
console.log(manish.getFullName());