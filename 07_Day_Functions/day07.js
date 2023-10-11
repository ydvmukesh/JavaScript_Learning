// A function can be declared or created in couple of ways:

// Declaration function
// Expression function
// Anonymous function
// Arrow function



//declaring a function without a parameter
function functionName() {

}
functionName() // calling function by its name and with parentheses


/* --------------------------------------------------------------------------------------- */
/* Function without a parameter and return */

function square() {
    let num = 2;
    let sq = num * num;
    console.log(sq)

}
square()

function addTwoNumbers() {
    let numOne = 10;
    let numTwo = 20;
    let sum = numOne + numTwo;
    console.log(sum)

}
addTwoNumbers();


// Anonymous Function
// Anonymous function or without name

const anonymousFun = function() {
    console.log(
        'I am an anonymous function and my value is stored in anonymousFun'
    )
}

/***************** Function returning value ***********************************/

function printFullName() {
    let firstName = 'Manson';
    let lastName = 'HTML';
    let space = ' ';
    let fullName = firstName + space + lastName;
    // console.log(fullName);
    return fullName
}
console.log(printFullName()); // calling a function


function addTwoNumbers() {
    let numOne = 10;
    let numTwo = 4;
    let total = numOne + numTwo;
    return total;

}
console.log("\n Add Two Numbers using Return :" + addTwoNumbers() + "\n");


/****************************************************************************/



/* Function with a parameter
In a function we can pass different data types(number, string, boolean, object, function) as a parameter.*/

function functionName(para1) {

    //code goes her
}

function add(num1, num2) {
    let addition = num1 + num2
        // console.log(addition)
    return addition;

}
let c = add(2, 5)
console.log("Return with Parameters :" +
    c + "\n");
// console.log(add(2, 5));

// Function with many parameters


function sum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
let result = sum([1, 2, 3, 4, 5]);
console.log("multiple parameters " + result);


/* =----------------------------------------------------------*/
// Arrow function

// invoke the function when two function are same
(function() {
    function sum1(a, b) {
        return a + b
    }

    console.log(sum1(10, 3))
})();


// Arrow function
let sum1 = (a, b) => a + b

console.log(sum1(10, 4));

/*----------------------------------------------*/

(function() {
    function double(a) {
        return 2 * a;

    }
    console.log(double(4));
})();

// arrow function

let double = (a) => 2 * a;
console.log(double(6));
/*-----------------------------------------------*/


function sumAll(args) {
    let sums = 0;
    for (i = 0; i < args.length; i++) {
        sums = sums + args[i];
    }
    return (sums);
}
let store = sumAll([1, 2, 3, 4, 5]);
console.log("Store " + store);

// ARROW Function

let sumAllNums = (args) => {
    let sum = 0;
    for (i = 0; i < args.length; i++) {
        sum = sum + args[i];
    }
    return sum;
}
console.log(sumAllNums([1, 2, 3, 4, 5]));

/*-----------------------------------------------*/


let changeUpperCase = (arr) => {
    let newArr = [];
    for (const element of arr) {
        newArr.push(element.toUpperCase());
    }
    return newArr
}
const countries = changeUpperCase(['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'])
console.log(countries);


// Function with default parameters

function greetings(name = 'Peter') {
    let message = `${name}, Welcome to 30 days of javascript`;
    return message
}
console.log(greetings());

/*-----------------------------------------------------*/
(function() {
    function getFullName(firstName = 'Manson', lastName = 'HTML') {
        let space = ' ';
        let fullName = firstName + space + lastName;
        console.log(fullName);

    }
    getFullName();
})(); //invoke function

// arrow Function

let getFullName = (firstName = 'Mukesh', lastName = 'Ydv') => {
    let space = ' ';
    let fullName = firstName + space + lastName;
    console.log(fullName);
}
getFullName();

// -------------------------------------------------------Exercises: Level 1 ----------------------------------------------------------------------

// 5
(function() {
    function areaOfRectangle(length, width) {
        return 2 * (length + width);
    }
    let perimeter = areaOfRectangle(4, 4)
    console.log("areaOfRectangle " + perimeter + '\n');
})();

let areaOfRectangle = (length, width) => 2 * (length + width);

console.log("areaOfRectangle Using Arrow Function " + areaOfRectangle(4, 5) + '\n');

// 6
function volumeOfRectPrism(length, width, height) {
    let volume = length * width * height;
    return volume;
}
let vol = volumeOfRectPrism(3, 2, 3);
console.log("volumeOfRectPrism " + vol + "\n");

// 7 
let areaOfCircle = (r) => Math.PI * r * r;
console.log("areaOfCircle using arrow function" + areaOfCircle(3) + "\n");

// 8
function circumOfCircle(r) {
    let value = 2 * Math.PI * r;
    return value;

}
// return when used if we store function in variable(returnValue)

let returnValue = circumOfCircle(3)
console.log("circumOfCircle " + returnValue + "\n");

// 9
// let density = (mass, volume) => mass / volume;
// console.log(density(10, 2));

function density(mass, volume) {
    let density = mass / volume;
    return density
}

let densitySub = density(5, 2);

console.log("density : " + density(5, 2) + '\n');



// 13

function bmi(weight, height) {
    let bmi = weight / (height * height);
    let group;
    if (bmi < 18.5) {
        group = 'Underweight'
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        group = 'Normal Weight';

    } else if (bmi > 25 && bmi <= 29.9) {
        group = 'Overweight';
    } else {
        group = 'obese'
    }
    return group
}
console.log("bmi " + bmi(100, 3) + '\n');


// 14

function checkSeason(month) {
    switch (month) {

        // If the month is September, October or November, return Autumn
        case "September":
        case "October":
        case "November":
            return "Autumn";

            // If the month is March, April or May, return Spring
        case "December":
        case "January":
        case "February":
            return "Winter";

        case "March":
        case "April":
        case "May":
            return "Spring";

        case "June":
        case "July":
        case "August":
            return "Summer";

        default:
            return "Invalid Month";

    }

}
let str = checkSeason("March")
console.log(str);


// 15

(function() {
    function findMax(a, b, c) {
        let max;
        if (a > b && a > c) {
            max = a;
        } else if (b > a && b > c) {
            max = b

        } else {
            max = c;
        }
        return max;
    }
    console.log("findMax Value : " + findMax(0, 10, 5));
    console.log("findMax Value : " + findMax(0, -10, -5));
})();
// second method
(function() {
    let findMax = (arr) => {
        result = Math.max(arr);
        return result
    }
    let maxValue = findMax([10, 30, 50, 40]);
    console.log(maxValue);
})();

// third method

// Define a function named findMax that takes no parameters
(function() {
    let findMax = () => {
        // Create a local array with four numbers
        let array = [20, 50, 60, 10];
        // Check if the array is empty and return undefined
        if (array.length == 0) {
            return undefined;
        }
        // Initialize the biggestNumber variable with the first element of the array
        let biggestNumber = array[0];
        // Use a for loop to iterate through the rest of the elements
        for (let i = 0; i < array.length; i++) {
            // If the current element is bigger than the biggestNumber, update it
            if (biggestNumber < array[i]) {
                biggestNumber = array[i]
            }
        }
        // Return the biggestNumber
        return biggestNumber
    }

    // Print the result of calling findMax with no arguments
    console.log(findMax());
})()

// Exercises: Level 2--------------------------------------------------------------------------------------------------------------
3 //
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        return arr;
    }
}
let z = printArray([1, 2, 3, 4, 5]);
console.log("printArray " + z);



// 4

// output
// showDateTime()
// 08/01/2020 04:08

function showDateTime() {
    let now = new Date();

    let day = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    return `${day}/${month}/${year} ${hour}:${minutes}`;

}
console.log(showDateTime());

// 5
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4

// Declare a function named swapValues
function swapValues() {
    // Use a temporary variable to store the value of x
    let temp = x;
    console.log(temp);
    // Assign the value of y to x
    x = y;
    // Assign the value of temp (which is x) to y
    y = temp;
}

// Test the function with some values
let x = 10;
let y = 20;
console.log(`Before swapping: x = ${x}, y = ${y}`);
swapValues();
console.log(`After swapping: x = ${x}, y = ${y}`);

// 6 
let reverseArray = () => {
    let arr = [1, 2, 3, 4, 5]
    let reversed = [];
    for (i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;

}
let number = reverseArray([1, 2, 3, 4, 5]);
console.log(number);


// 7 
(function() {
    let capitalizedArray = (arry) => {
        let capitalizedArray = [];
        for (i = 0; i <= arry.length - 1; i++) {
            capitalizedArray.push(arry[i]);
        }
        return capitalizedArray
    }
    let capitalizedArras = capitalizedArray(["benson", "mason", "marshall", "maxwall"]);
    console.log(capitalizedArras);
})();



// 9
// without parameters || with invoke function
(function() {
    let removeItem = (index) => {
        let array = ["apple", "banana", "orange", "grape"];
        array.splice(index, 1);
        return array;
    }
    console.log(removeItem(1));
});

// with parameters

let removeItem = (index, arr) => {
        let array = [...arr];
        array.splice(index, 1);
        return array;
    }
    // let array = ["apple", "banana", "orange", "grape"];
let array = removeItem(3, ["apple", "banana", "orange", "grape"])
console.log(array);

// 11
let sumOfAll = (arr) => {
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenSum = evenSum + arr[i];

        } else {
            oddSum = oddSum + arr[i]
        }
    }
    return [evenSum, oddSum]

}
let sum = sumOfAll([1, 2, 3, 4, 5])
console.log("even sum" + sum[0]);
console.log("even sum" + sum[1]);


// 15
// 192.0.2.1
let randomUserIp = () => {

    let ip = "";
    for (i = 0; i < 4; i++) {
        let num = Math.floor(Math.random() * 256);
        ip = ip + num + '.';
    }
    return ip.slice(0, -1)
}
console.log(randomUserIp());


// 16   Q- 32:8c:27:26:72:34

let randomMacAddress = () => {

    let mac = "";
    for (i = 0; i < 6; i++) {

        let num = Math.floor(Math.random() * 256);
        let hex = num.toString(16).slice(-2);
        mac = mac + hex + ':';
    }
    return mac.slice(0, -1);
}
console.log(randomMacAddress());

// 17 randomHexaNumberGenerator

let randomHexaNumberGenerator = () => {
    let hex = "";
    let chars = "0123456789ABCDEF"
    for (i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * chars.length);
        hex = hex + chars[index]
    }
    return "#" + hex
}
console.log(randomHexaNumberGenerator());

// 18 userIdGenerator

let userIdGenerator = () => {
    let id = "";
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < 7; i++) {
        let index = Math.floor(Math.random() * chars.length)
        id = id + chars[index]
    }
    return id
}
console.log(userIdGenerator());