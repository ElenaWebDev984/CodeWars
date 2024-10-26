// 🎯 Returning Strings

//❓ DESCRIPTIONS
//Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

//[Make sure you type the exact thing I wrote or the program may not execute properly]

// 📌 TESTS
//assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
//assert.strictEqual(greet("Shingles"), "Hello, Shingles how are you doing today?");

// ✅ SOLUTIONS
// 1 variant

function greet(name){
    return "Hello, " + name + " how are you doing today?"
  }

  console.log(greet("Shingles"));


// 2 variant 👌Best Practices👌
function greet(name){
  return `Hello, ${name} how are you doing today?`;
}

console.log(greet("Ryan"))
console.log(greet("Adam"))

// 3 variant
// const greet = name => `Hello, ${name} how are you doing today?`;


