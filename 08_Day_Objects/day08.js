// Creating an objecting with values
//  object mai keys hum khud define krte hai 
// but array mai key 0 se number hoti hai
const rectangle = {
        width: 20,
        height: 30
    }
    // rectangle.size = 40;
    // delete rectangle.height;
console.log(rectangle);

// //////////////////////////////////////


// object literals
const mySym = Symbol("key1") // symbol data type declaration
const person = {
    // KEY : VALUE
    FirstName: "Mason",
    "last Name": "HTML",
    age: 20,
    [mySym]: "key1", // assign the symbol in object as key
    location: "Jaipur",
    skills: ['Html', 'css', 'js', 'bootstrap', 'figma', 'PhotoShop'],
    isMarried: true,
    subject: {
        First: "HTML",
        second: "CSS",
        third: "jQuery",
    },
};
person.country = "India";
console.log(person["last Name"]);
console.log(person.subject.third);
person.email = "Object@gmail.com";
// Object.freeze(person) // freeze the value can't change the value
person.email = "Obj@gmail.com";

console.log(person);

person.greeting = function() {
    console.log("Hello Person");
}

person.greetingTwo = function() {
    console.log(`Hello Person ${person.FirstName}`); // reference the name  in this function 
    console.log(`Hello Person ${this.FirstName}`); // reference the name  in this function 
}
console.log(person.greeting());
console.log(person.greetingTwo());

// singleton 
// Object.create

// ex
// const tinderUser = new Object();
const tinderUser = {}
tinderUser.id = "12223",
    tinderUser.name = "MAX",
    tinderUser.isLogIn = false,
    console.log(tinderUser);

// method to change to array
console.log(Object.keys(tinderUser)); // return keys also this change in array
console.log(Object.values(tinderUser)); // return value
console.log(tinderUser.hasOwnProperty("isLogIna")); // it is use for the check the value existing or not. if exist then return true otherwise return false

// Object in Object

let regularUser = {
    email: "max@gmail.com",
    fullName: {
        userFullName: {
            firstName: "MAXWALL",
            lastName: "HTML"
        }
    }
}
console.log(regularUser.fullName.userFullName.firstName); //objet nesting



// marge object
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2 }
console.log(obj3);

/********************************************************************************/
// Exercises: Level 1 

// 1
let dog = {
    name: "Tom",
    legs: 4,
    color: "black",
    age: 5,
    bark: function() {
        return "woof woof"
    }

};
// add new properties 
dog.breed = "Labrador";
dog.getDogInfo = function() {
    return `${this.name} is a ${this.color} ${this.breed} and is ${this.age} year old`;
}
console.log(dog.getDogInfo());


/********************************************************************************/
// Exercises: Level 2
(function() {
    const users = {
        // key : value

        Alex: {
            email: 'alex@alex.com',
            skills: ['HTML', 'CSS', 'JavaScript'],
            age: 20,
            isLoggedIn: false,
            points: 30
        },
        Asab: {
            email: 'asab@asab.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
            age: 25,
            isLoggedIn: false,
            points: 50
        },
        Brook: {
            email: 'daniel@daniel.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
            age: 30,
            isLoggedIn: true,
            points: 50
        },
        Daniel: {
            email: 'daniel@alex.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
            age: 20,
            isLoggedIn: false,
            points: 40
        },
        John: {
            email: 'john@john.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
            age: 20,
            isLoggedIn: true,
            points: 50
        },
        Thomas: {
            email: 'thomas@thomas.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'React'],
            age: 20,
            isLoggedIn: false,
            points: 40
        },
        Paul: {
            email: 'paul@paul.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
            age: 20,
            isLoggedIn: false,
            points: 40
        }
    }

    let moreSkills = "";
    let nameOfUser = "";
    for (let user in users) {
        if (moreSkills.length < users[user].skills.length) {
            moreSkills = users[user].skills;
            nameOfUser = user // here user take key(name) instead of index of becasue of object

        }
    }

    console.log('Most Skills user is' + nameOfUser);
}());
// 2
(function() {
    const users = {
        Alex: {
            email: 'mailto:alex@alex.com',
            skills: ['HTML', 'CSS', 'JavaScript'],
            age: 20,
            isLoggedIn: false,
            points: 30
        },
        Asab: {
            email: 'mailto:asab@asab.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
            age: 25,
            isLoggedIn: false,
            points: 50
        },
        Brook: {
            email: 'mailto:daniel@daniel.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
            age: 30,
            isLoggedIn: true,
            points: 50
        },
        Daniel: {
            email: 'mailto:daniel@alex.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
            age: 20,
            isLoggedIn: false,
            points: 40
        },
        John: {
            email: 'mailto:john@john.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
            age: 20,
            isLoggedIn: true,
            points: 50
        },
        Thomas: {
            email: 'mailto:thomas@thomas.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'React'],
            age: 20,
            isLoggedIn: false,
            points: 40
        },
        Paul: {
            email: 'mailto:paul@paul.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
            age: 20,
            isLoggedIn: false,
            points: 40
        }
    }
    let countLoggedUser = [];
    // let mostPoints = [];

    for (let user in users) {
        if (users[user].isLoggedIn = true && users[user].points >= 50) {
            // countLoggedUser = countLoggedUser +" " + user;// this is print as string
            // mostPoints = mostPoints + " " + users[user].points

            //  second method
            // countLoggedU.push(user);
            // mostPoints.push(users[user].points)
            // 

            // third method
            countLoggedUser.push({ Username: user, Userpoint: users[user].points })
        }

    }
    console.log(countLoggedUser)
        // console.log(mostPoints)

}());

// 4
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

let myName = {...users }
myName.Mason = {
    email: 'mason@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 90

};
console.log(myName)


// 5
console.log(Object.keys(myName))
    // 6 
console.log(Object.values(myName));

console.log(key + ' :- ', +value);