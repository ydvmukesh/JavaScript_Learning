const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Estonia', 'Egypt', 'Ethiopia']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: ' ' },
]

// Exercises: Level 2


/*1 ___________________________________________________________________________*/
const totalPrice = products
    .map((item) => item.price)
    .filter((item) => item > 3)
    .reduce((acc, curr) => {
        // console.log(`acc ${acc} curr ${curr}`);
        return (acc + curr)
    }, 0)
console.log(totalPrice);


/*2 ___________________________________________________________________________*/


// let categorizeCountries = (pattern) => {
//     let matchingCountries = [];
//     for (let country of countries) {
//         if (country.includes(pattern)) {
//             matchingCountries.push(country)
//         }
//     }
//     return matchingCountries
// }
// let result = categorizeCountries('ia')
// console.log("categorizeCountries :- " + result);

// or

let categorizeCountrie = (pattern) => {
    const matchedCountries = countries.filter(country => country.toLowerCase().includes(pattern.toLowerCase()));
    return matchedCountries;
}
const commonPattern = 'ia';
const matchedCountries = categorizeCountrie(commonPattern);
console.log(matchedCountries);


/*3 ___________________________________________________________________________*/

let countStartingLetters = (countries) => {

}