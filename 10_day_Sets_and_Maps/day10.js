// Creating an empty set
// const companies = new Set();
// console.log(companies);


// const numbers = [1, 2, 3, 4, 5, 5, 6];
const myArray = [1, 2, 3, 4, 5];
const mySet = new Set(myArray);

// console.log(numbers);
// console.log(mySet);
// const uniqueArray = [...mySet];
// console.log(uniqueArray);
/* ___________________________________________________________________________*/
// Add method
// mySet.add(7);
// mySet.add({ channelName: ' Javascript' });
// mySet.add([' Javascript', 'React']);
// console.log(mySet);

/* ___________________________________________________________________________*/
// delete

// mySet.delete(3);
// console.log(mySet);

// clear 

// mySet.clear();
// console.log(mySet);

/*___________________________________________________________________________ */
//    has it return boolean value 

// console.log(mySet.has(4));


/*___________________________________________________________________________ */
// console.log(mySet.size);

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]
const langSet = new Set(languages);
// console.log(langSet);

for (let l of langSet) {
    const filterLand = languages.filter((lng) => lng === l)
    console.log(filterLand);
}


/*___________________________________________________________________________ */
/*___________________________________________________________________________ */
/*___________________________________________________________________________ */
/*___________________________________________________________________________ */
/*___________________________________________________________________________ */


// Map

// const map = new Map();
// console.log(map);


// countries = [
//         ['Finland', 'Helsinki'],
//         ['Sweden', 'Stockholm'],
//         ['Norway', 'Oslo'],
//     ]
// const map = new Map(countries)
// console.log(map);


// exercise1
const countries = ['India', 'China', 'Brazil', 'Canada', 'France'];
const map = new Map();

for (const country of countries) {
    const length = country.length;
    map.set(country, length)
}
console.log(map);