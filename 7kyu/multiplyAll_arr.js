// 🎯 Currying functions: multiply all elements in an array

//❓ DESCRIPTIONS
// To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

// Example:

// multiplyAll([1, 2, 3])(2) = [2, 4, 6];
// You must not mutate the original array.

// ✅ SOLUTIONS
// 1 variant

function multiplyAll(arr) {
    return function(multiplier) {
        return arr.map(num => num * multiplier);
    };
}

// 2 variant
function multiplyAll(arr) {
    return function(n) {
      return arr.map(x => x * n);
    }
  }

// 3 variant
const multiplyAll = arr => n => arr.map(x => n * x);