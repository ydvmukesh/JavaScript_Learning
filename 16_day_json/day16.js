const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "mailto:email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "mailto:email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "mailto:email":"lidiya@lidiya.com"
      }
    ]
    }`
    // console.log("usersText",usersText)


const usersObj = JSON.parse(usersText, undefined, 4)
console.log(usersObj.users)
const stringData = JSON.stringify(usersObj)
console.log(stringData)