// 🎯 Say hello!

//❓ DESCRIPTIONS
//     Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.
//
//     Example:
//
// greet("Niks") === "hello Niks!";
// greet("") === null; // Return null if input is empty string
// greet(null) === null; // Return null if input is null


// ✅ SOLUTIONS
// 1 variant
function greet(name) {
    if (!name) {
        return null;
    }
    return `hello ${name}!`;
}

// 2 variant
function greet(name) {
    return name ? 'hello ' + name + '!' : null;
}

// 3 variant
function greet(name) {
    return name ? `hello ${name}!` : null;
}

// 4 variant
const greet = name =>  name ? `hello ${name}!` : null;









