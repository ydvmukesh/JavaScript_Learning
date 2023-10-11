// let a = "web";
// let b = false;
// let c = undefined;
// let d = null;

// console.log('a=' + a, '\nb=' + b, '\nc=' + c, '\nd=' + d)



// let AssignString = '30 Days of javascript';

// console.log(AssignString)



// // oddi code

// for (let i = 1; i <= 5; i++) {
//     // console.log("i ke value ",i)

//     // console.log("-----------start for j------for --",i)
//     let str = ""
//     for (let j = 1; j <= i; j++) {
//         // console.log("j ke value",j)
//         str = str + j
//     }
//     // console.log("-----------end for j--------")
//     // let str=""
//     // for(j=1; j<=i; j++){
//     //     str+=j
//     // }
//     console.log(str)
// }


// // output

// // 1
// // 12
// // 123
// // 1234
// // 12345

// // or 
// for (let i = 1; i <= 5; i++) {
//     let str = ""
//     for (j = 1; j <= i; j++) {
//         str += j
//     }
//     console.log(str)
// }
// console.log("\n")

// // start

// for (let i = 0; i <= 10; i++) {
//     i = 0
//     let str = ""
//     for (let j = 1; j < 4; j++) {
//         j = 2

//         str += i ** j
//             // str=str+i**j
//             //  str=0**1=0 //first update for i==0
//             //  str=0+0**2=0+0=00 //second update for i==0


//     }
//     console.log(str)
// }


// // second ///////////////////////////////////

// //     i    i^2   i^3
// //  0    0     0
// //  1    1     1
// //  2    4     8
// //  3    9     27
// //  4    16    64
// //  5    25    125
// //  6    36    216
// //  7    49    343
// //  8    64    512
// //  9    81    729
// //  10   100   1000

// for (let i = 0; i <= 10; i++) {
//     // i=0
//     let str = ""
//     for (let j = 1; j < 4; j++) {
//         // j=2
//         // console.log(j)
//         // str=str==""?str+i**j:str+" "+i**j
//         if (str == "") {
//             str += i ** j
//         } else {
//             str = str + " " + i ** j
//         }
//         //  str=str+" "+i**j
//         //  str+=i**j
//         // str=str+i**j
//         //  str=0**1=0 //first update for i==0
//         //  str=0+0**2=0+0=00 //second update for i==0
//         //  str=0+0**3=0+0=000 //second update for i==0

//     }
//     console.log(str)
// }


// /////////////////////////////////////////////////////
// let arr = []
// for (let i = 0; i <= 100; i++) {
//     let primeNumber = " ";

//     if (i % 2 == 0) {
//         console.log(i);
//     } else {
//         arr.push(i)
//     }
// }
// console.log("odd numbers are")
// for (let h = 0; h < arr.length; h++) {
//     console.log(arr[h])
// }

// //   ///////////////////////////////////
// // Exercises: Level 2
// let result = '';
// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// const charactersLength = characters.length;
// let counter = 0;
// while (counter < length) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     counter += 1;
// }
// return result;




// // //////////////////////////


// // let randomCharString= String.fromCharCode(randomChar)

// let stor = "";
// for (i = 0; i < 6; i++) {
//     let randomChar = Math.floor((Math.random() * 100) + 97);


//     // stor=+randomChar
//     // console.log("randomChar",randomChar)
//     let randomCharString = String.fromCharCode(randomChar);
//     stor += randomCharString
//         //   console.log(randomCharString)
//         //   console.log(randomCharString + " "+ randomChar  );

//     // stor= stor.push(randomCharString);  
//     //  console.log(stor);

// }
// console.log(stor);


// // ouptput:  wer3ef



// // second




// let stor = "";
// for (i = 0; stor.length < 6; i++) {
//     let randomChar = Math.floor((Math.random() * 100) + 97);

//     if (randomChar > 97 && randomChar < 122) {
//         let randomCharString = String.fromCharCode(randomChar); //d
//         stor += randomCharString //"c"+d
//     }


// }
// console.log(stor);


// // ouptput:  wer3ef

// //////////////////////////////////////////////////////////

// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
// ]
// let str = fullStack.toString();
// console.log(str)
//     // HTML
//     // CSS
//     // JS
//     // REACT
//     // NODE
//     // EXPRESS
//     // MONGODB


// // map, filter, reduce,  forEach 

// let arr = [1, 2, 3, 4, 1, 1]

// // map is used to transform the  whole array
// // arr=arr.map((singlevalue)=>{
// //     return singlevalue**2
// // })//always return array

// // to filter certain value based on condition
// // arr=arr.filter((singlevalue)=>{
// //     if(singlevalue===1){
// //         return singlevalue
// //     }
// // })//always return array

// let arr = arr.reduce((previousvalue, currentvalue) => {
//         console.log("fgg", previousvalue, currentvalue)
//         return previousvalue + currentvalue
//     }, 0) //it will not return array it will return single value
// console.log("arr", arr)


// let arr = [1, 2, 3, 4]
// let sum = 0
// arr.forEach((item) => {
//     console.log("item", item)
//     sum += item;


// })
// console.log("sum..", sum)

// // for(let i=0;i5;i++)


// // for(let item in arr)
// // return index or position

// for (let item of arr)
// // return value 




// ////////////////////////////////////////////////////////////////////////////////////////////////////////////

//     const webTechs = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"];
// let finalArray = []
// for (let i = 0; i <= webTechs.length - 1; i++) {
//     // console.log("webTechs[i",webTechs[i])
//     //     let arrayOfArrays =[];
//     // //   arrayOfArrays = arrayOfArrays + arrayOfArrays.push(webTechs[i]);
//     // console.log("sd",[]+arrayOfArrays.push(webTechs[i]))
//     //   console.log(arrayOfArrays)

//     // odiiii
//     let singleItemarray = []
//     singleItemarray.push(webTechs[i])
//         // i value for html=4 for css=3 for javascript 10
//     let le = webTechs[i].length
//     singleItemarray.push(le)
//     console.log("singleItemarray", singleItemarray)
//     finalArray.push(singleItemarray)

// }

// console.log("final array", finalArray)

// // Output: [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

// //->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // 6.
// const webTechs = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"];


// let finalArray = []
// for (let i = 0; i <= webTechs.length - 1; i++) {
//     let singleItemArray = [];
//     singleItemArray.push(webTechs[i]);
//     singleItemArray.push(webTechs[i].slice(0, 3))
//     singleItemArray.push(webTechs[i].length);
//     finalArray.push(singleItemArray)

// }

// console.log("final array", finalArray)
//     //output=[] 1st step 
//     // ouput=[[],[],[]...7 times] 2nd step 
//     //output =[["HTML"],["CSS"]...and so on] 3rd step
//     // output=[["HTML",4],["css",3]....] 4th step

// // // final array [
// //   [ 'HTML', 4, 'HTM' ],
// //   [ 'CSS', 3, 'CSS' ],
// //   [ 'JavaScript', 10, 'Jav' ],
// //   [ 'React', 5, 'Rea' ],
// //   [ 'Redux', 5, 'Red' ],
// //   [ 'Node', 4, 'Nod' ],
// //   [ 'MongoDB', 7, 'Mon' ]
// // ]

// // with runing loop

// // 7.////////////////////////////////////////////////////////////////////////////////////////////


// // // final array [
// //   [ 'HTML', 4, 'HTM' ],
// //   [ 'CSS', 3, 'CSS' ],
// //   [ 'JavaScript', 10, 'Jav' ],
// //   [ 'React', 5, 'Rea' ],
// //   [ 'Redux', 5, 'Red' ],
// //   [ 'Node', 4, 'Nod' ],
// //   [ 'MongoDB', 7, 'Mon' ]
// // ]

// const webTechs = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"];


// let finalArray = []
// for (let i = 0; i <= webTechs.length - 1; i++) {

//     // let singleItemarray=[]
//     // finalArray.push(singleItemarray)
//     //  till 2nd step 

//     /*  third step
//     let singleItemarray=[]
//     singleItemarray.push(webTechs[i])
//     finalArray.push(singleItemarray)
//     */

//     //   fourth step
//     // let singleItemarray=[]
//     // singleItemarray.push(webTechs[i])
//     // singleItemarray.push(webTechs[i].length)
//     // finalArray.push(singleItemarray)


//     // fifth step 
//     let singleItemarray = []
//     singleItemarray.push(webTechs[i])
//     singleItemarray.push(webTechs[i].length)

//     let newvalue = webTechs[i].slice(0, 3)
//         // singleItemarray.push(webTechs[i].slice(0,3))
//         // console.log("newvalue.",newvalue)
//     singleItemarray.push(newvalue)

//     finalArray.push(singleItemarray)


//     // singleItemarray.push(webTechs[i])

//     // let le=webTechs[i].length
//     // singleItemarray.push(le)
//     // console.log("singleItemarray",singleItemarray)
//     // finalArray.push(singleItemarray)

// }

// console.log("final array", finalArray)
//     //output=[] 1st step 
//     // ouput=[[],[],[]...7 times] 2nd step 
//     //output =[["HTML"],["CSS"]...and so on] 3rd step
//     // output=[["HTML",4],["css",3]....] 4th step

// // Output: [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

// // shorend Method 3rd method

// const webTechs = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"];


// let finalArray = []
// for (let i = 0; i <= webTechs.length - 1; i++) {
//     finalArray.push([
//         webTechs[i],
//         webTechs[i].slice(0, 3),
//         webTechs[i].length
//     ]);


// }

// console.log("final array", finalArray)

document.addEventListener('click', function() {

    console.log("add Event listener is working");
})

document.addEventListener('click', () => console.log("Add Listener is working using Arrow function"))



/* ------------------------------------------------ Function code ------------------------------------------------*/


// 7 function
// Exercise 2 

// 15 find maxValue

let findMax = (arr) => {

    console.log("array.....", arr)

    if (arr.length == 0) {
        return undefined
    }
    let biggestNumber = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (biggestNumber < arr[i]) {
            biggestNumber = arr[i]
        }
    }
    return biggestNumber

}
let maxValue = findMax([-3, -2, -20, -30]); //70
console.log(maxValue);
// second method
// without parameters
(function() {

    let findMax = () => {
        // console.log("arr..",arr)
        return Math.max(-3, -2, -20, -30); //-2
        // return result

    }
    let maxValue = findMax(); //-2
    console.log(maxValue);
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
let array = ["apple", "banana", "orange", "grape"];
console.log(removeItem(1, array));



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
        // return {
        //     evenSum:evenSum,
        //     oddSum:oddSum
        // }

}
let sum = sumOfAll([1, 2, 3, 4, 5, 404, 31])
console.log("sum....", sum)
    // console.log("evensum",sum.evenSum)
    // console.log("oddsum...",sum.oddSum)
console.log("even sum" + sum[0]);
console.log("even sum" + sum[1]);