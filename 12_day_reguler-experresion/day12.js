// Modifier
// g , i

// 1. exec()   :- this function will return an array for match or null for no match
// 2. test()   :- Returns true or false
// 3. search() :- Returns Index of first match else -1
// 4. replace():- Returns new replaced string with all the replacements


// Metacharacters:-

// \ | () [ { ^ $ * + ? .

// Quantifiers:-
// *
// +
// ?

// Brackets:-
// {}
// []

// --------------- exec ------------------------
// let str = 'I love JavaScript'



// let reg = /love/
// const result = reg.exec(str)
// console.log(result)

// str = "I love JavaScript and React"

// reg = /javaScript/i
// let result = reg.exec(str)
// console.log(result);


// -----------------test return T/F-------------------

// reg = /love/
// let result = reg.test(str)
// console.log(result);

// ---------------------match------------------

// reg = /JavaScript/
// let result = str.match(reg)
// console.log(result);

// --------------replace--------------------
// str = "I love JavaScript and React"
// reg = /JavaScript/
// let result = str.replace(reg, 'Android')
// console.log(result);

//------------------MetaCharacters


let st = 'This is improve file for 23improve project  color exampl?e fixe*d'
reg = /^This/; // start
reg = /project$/; // end
reg = /f.le/; // single char match any
reg = /f*le/; // match 0 or more char match any
reg = /colou?r/ // u option
reg = /exampl\?e/ // ? \
reg = /fixe\*d/ // * \

///////////////
reg = /\wrove/ // \w for find words
reg = /\Wfile/ // \start  _, alphabet number
reg = /\dimp/ // \check  with digit
reg = /\Dimp/ // \check   no digit

// brackets


st = 'This is cool improve file for improve project'
reg = /imp[xyr]ove / // x y r => imp
reg = /imp[a-zA-Z]ove / // find all character of 
reg = /imp[^xyz]ove / // ^ not 
reg = /imp[^xyz]o[v]e / //  


// {}

reg = /co{2}l/ // match two 00
reg = /co{0,2}l/ // match 0 1 2

if (reg.test(st)) {
    let result = reg.exec(st)
    console.log(result);
} else {
    console.log('no Match');
}