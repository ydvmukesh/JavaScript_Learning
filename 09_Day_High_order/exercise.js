const book = [{
        title: "Book first",
        genre: "English",
        publish: 1897,
        edition: "2004"
    },
    {
        title: "Book second",
        genre: "Hindi",
        publish: 1997,
        edition: "2006"
    },
    {
        title: "Book third",
        genre: "history",
        publish: 2000,
        edition: "2012"
    },
    {
        title: "Book four",
        genre: "Math",
        publish: 2009,
        edition: "2014"
    },
    {
        title: "Book four",
        genre: "Math",
        publish: 2009,
        edition: "2014"
    },
    {
        title: "Book five",
        genre: "science",
        publish: 1978,
        edition: "2002"
    },
];

// let userBooks = book.filter((bk) => bk.genre);
userBooks = book.filter((bk) => { return bk.publish >= 2000 }) // return keyword because it is in (scope {})/ if no use {} then not need to return keyword
userBooks = book.filter((bk) => { return bk.publish >= 2000 && bk.genre === "Math" })

console.log(userBooks);

/*___________________________________________________________________________*/

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
    /* 4___________________________________________________________________________*/
countries.forEach((country, index) => {
    console.log(country, index);
});


/*5 ___________________________________________________________________________*/

// numbers.forEach((num) => console.log(num));

/*6 ___________________________________________________________________________*/

const upperCaseCountry = countries.map((country) => {
    return country.toUpperCase()
})
console.log(upperCaseCountry);


/*7 ___________________________________________________________________________*/

const countriesLength = countries.map((country) => {
    return (`${country} ${country.length}`)
})
console.log(countriesLength);


/*8 ___________________________________________________________________________*/

const numberSquare = numbers.map((num) => {


    return num * num
});
console.log(numberSquare);

/*10 ___________________________________________________________________________*/

const productArray = products.filter((item) => {
    return item.price != ' ';
}).map((item) => { return item.price });
console.log(productArray);

/*11 ___________________________________________________________________________*/

const landCountries = countries.filter((country) => {
    return country.toLocaleLowerCase().includes("land")
});
console.log(landCountries);

/*13 ___________________________________________________________________________*/

const sixLettersCountries = countries.filter((country) => {
    return country.length >= 6;
});
console.log(sixLettersCountries);

/*14 ___________________________________________________________________________*/
const letterWithE = countries.filter((country) => {
    return country.startsWith("E")
});

console.log(letterWithE);

/*16 ___________________________________________________________________________*/
let mixArray = [1, 3, "Maxwall", 5, "Mason", 67, true];

let getStringLists = (arr) => {
    return typeof arr === "string"
}
let stringArray = mixArray.filter(getStringLists);
console.log(stringArray);

/*17 __________________________________________________________zzz_________________*/

let numSum = numbers.reduce((acc, curr) => {
    return acc + curr
}, 0);
console.log(numSum);

/*20 ___________________________________________________________________________*/

const largestLengthName = names.some((userName) => {
    return userName.length >= 7;
});
console.log(" length greater than seven :- " + largestLengthName);


/*23 ___________________________________________________________________________*/

const landWordCountries = countries.every((landContouries) => {
    return landContouries == "land";
})

console.log("Countries contain land :- " + landWordCountries);



/*23 ___________________________________________________________________________*/

const countriesLengthSix = countries.find((countriesLength) => countriesLength.length == 6);
console.log("country containing only six letters :" + countriesLengthSix);

/*24 ___________________________________________________________________________*/
const countriesLengthSixIndex = countries.findIndex((countriesLength) => countriesLength.length == 6);
console.log("position of the first country containing only six :- " + countriesLengthSixIndex);

/*25 ___________________________________________________________________________*/

const findNorway = countries.findIndex((country) => {
    return country == "Norway";
});
console.log(findNorway);

/*26 ___________________________________________________________________________*/

const findRussia = countries.findIndex((country) => {
    return country == "Russia";
});

console.log(findRussia);