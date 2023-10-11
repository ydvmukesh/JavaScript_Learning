class Animal {
    constructor(name, age, color, legs) {
            console.log("called2", name, age) // called 2

            this.name = name
            this.age = age
            this.color = color
            this.legs = legs
        }
        // Method to make the animal speak
    speak() {
        return ` ${this.name} `
    }
    diplayInfo() {
        return `Name: ${this.name}\n Age: ${this.age} \n Color: ${this.color} \n Age: ${this.legs}`
    }
}

// const myAnimal = new Animal('XYZ', 22, 'white', 'four')
// let animalName = myAnimal.speak();
// let animalInfo = myAnimal.diplayInfo()
// console.log('animalName', animalName);
// console.log('Animal Details  \n' + animalInfo);


// Create a Dog and Cat child class from the Animal Class.

class Dog extends Animal {
    constructor(name, age, color) {
        console.log("called1", name) // called 1
        super(name, age, color)
    }
    bark() {
        return `${this.name} barks loudly`
    }
}
class Cat extends Animal {
    constructor(name, age, color) {
            super(name, age, color)
        }
        // Method specific to Cat
    meow() {
        return `${this.name} meows softly`
    }
}

const myDog = new Dog('Buddy', 5, 'red')
    // const myCat = new Cat('whiskers', 3, 'Brown')

// let dogInfo = myDog.bark();
// let catInfo = myCat.meow();
// console.log('Dog info: ', dogInfo);
// console.log('Cat info ', catInfo);