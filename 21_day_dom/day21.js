// const allTitles = document.getElementsByTagName('h1')

// console.log(allTitles) //HTMLCollections
// console.log(allTitles.length) // 4

// for (let i = 0; i < allTitles.length; i++) {
//     console.log(allTitles[i]) // prints each elements in the HTMLCollection
// }
// ============================================
// Adding attribute
const titles = document.querySelectorAll('h1')
// titles[3].className = 'title'
// titles[3].id = 'fourth-title'
// ===============================

// Adding attribute using setAttribute
// titles[3].setAttribute('class' 'tit' )
// titles[3].setAttribute('id', 'four')


// Adding class using classList
// titles[3].classList.add('title', 'addtitle')

//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.add('title', 'header-title')


// Adding Text to HTML element

titles[3].textContent = 'Four Title'

const lists = `
<li>List 1</li>
<li>List 2</li>
<li>List 3</li>
<li>List 3</li>
`
const ul = document.querySelector('ul')
ul.innerHTML = lists

// Adding style
const titless = document.querySelectorAll('h1')
titless.forEach((titl, i)=>{
    titl.style.fontSize = '24px'
    if(i % 2 == 0){
        titl.style.color = 'red'
    }
    else {
        titl.style.color = 'green'
    }
})