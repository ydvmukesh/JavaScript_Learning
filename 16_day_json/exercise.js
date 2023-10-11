class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    speak() {
        console.log(`${this.name} says something.`);
    }

    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Color: ${this.color}`);
        console.log(`Legs: ${this.legs}`);
    }

    ageAnimal(years) {
        this.age += years;
        console.log(`${this.name} is now ${this.age} years old.`);
    }
}

class Dog extends Animal {
    constructor(name, age, color) {
        super(name, age, color, 4);
    }

    speak() {
        console.log(`${this.name} barks loudly.`);
    }
}

class Cat extends Animal {
    constructor(name, age, color) {
        super(name, age, color, 4);
    }

    speak() {
        console.log(`${this.name} purrs softly.`);
    }
}

const myDog = new Dog("Buddy", 2, "Brown");
const myCat = new Cat("Whiskers", 1, "Gray");

myDog.displayInfo();
myDog.speak();

myCat.displayInfo();
myCat.speak();