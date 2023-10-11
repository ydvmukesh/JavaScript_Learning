// Destructing Arrays
const numbers = [1, 2, 3]
    // let [numOne, numTwo, numThree] = numbers;
let [numOne, , numThree] = numbers //2 is omitted

// console.log(numOne, numTwo, numThree);
// console.log(numOne, numThree);

const names = ['Asabeneh', 'Brook', 'David', 'John']
let [firstPerson, secondPerson, thirdPerson, ] = names
// console.log(firstPerson, secondPerson, thirdPerson, ...names);


//3
const fullStack = [
    ['HTML', 'CSS', 'JavaScript', 'React'],
    ['Node', 'Express', 'MongoDB']
]
let [frondEnd, backEnd] = fullStack
// console.log(frondEnd);
// console.log(backEnd);

console.log("\n\nDestructuring during iteration");
// Destructuring during iteration
console.log();
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
for (const [country, city] of countries) {
    console.log(`country, city`);

}

// Destructuring Object
console.log("\n\nDestructuring Object");
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
}
let { width, height, area } = rectangle
console.log(width, height);

console.log("\n\nObject parameter with destructuring");
// Object parameter with destructuring


const rect = {
    width: 20,
    height: 10
}

const calculatePerimeter = ({ width, height }) => {
    return 2 * (width + height)
}
console.log(calculatePerimeter(rect));