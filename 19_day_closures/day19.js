// Lexical scoping

function Outer() {
    let username = "mason";
    // console.log("", secret);

    function Inner() {
        let secret = "124"
        console.log("Inner", username);
    }

    function InnerTwo() {
        console.log("InnerTwo", username);
        // console.log("", secret); // not access to child properties. only access parent properties
    }
    Inner()
    InnerTwo()
}
Outer()
    // console.log("Too Outer", username); // can't access outer variable bcz it is outside scope so this why using closer
    <

    // Closure means that when a function returns it will return not only the return function but all the scopes.(Lexical scope)
    function makeFunc() {
        let name = "Mozilla";

        function displayName() {
            // console.log(name);
        }
        return displayName;
    }
    // const myFunc = makeFunc();
    // myFunc();