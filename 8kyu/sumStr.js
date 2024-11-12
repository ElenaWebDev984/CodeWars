// 🎯 Sum The Strings

//❓ DESCRIPTIONS
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

// 📌 TESTS
// assert.strictEqual(sumStr("4","5"), "9");
// assert.strictEqual(sumStr("34","5"), "39");

// ✅ SOLUTIONS
// 1 variant

function sumStr(a, b) {
    // Convert the inputs to integers, treating empty strings as zero
    const numA = a === '' ? 0 : parseInt(a, 10);
    const numB = b === '' ? 0 : parseInt(b, 10);
    
    // Calculate the sum
    const sum = numA + numB;
    
    // Return the sum as a string
    return sum.toString();
}

// 2 variant
function sumStr(a,b) {
    return String(Number(a)+Number(b));
  }

// 3 variant
function sumStr(a,b) {
    return (+a+ +b)+''  
  }

// 4 variant
function sumStr(a,b) {
    const num1 = Number(a);
    const num2 = Number(b);
    return String(num1 + num2)
  }

// 5 variant
sumStr = (a,b) => String(+a + +b);