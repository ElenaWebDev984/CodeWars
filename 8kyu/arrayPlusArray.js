// 🎯 Array plus array

//❓ DESCRIPTIONS
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// 📌 TESTS
// assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
// assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
// assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
// assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);

// ✅ SOLUTIONS
// 1 variant

assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);

function arrayPlusArray(arr1, arr2) {
    // Combine the two arrays
    let combinedArray = arr1.concat(arr2);

    // Calculate the sum of the combined array
    let sum = combinedArray.reduce((total, current) => total + current, 0);

    return sum; // Return the total sum
}

// 2 variant
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
  }

// 3 variant
function arrayPlusArray(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    return arr.reduce((a, b) => a + b);
  }

// 4 variant
function arrayPlusArray(arr1, arr2) {
    var suma = 0;
    for(var i = 0; i < arr1.length; i++)
      suma += arr1[i];
    for(var i = 0; i < arr2.length; i++)
      suma += arr2[i];
    return suma;
  }