// 🎯 Sum of positive

//❓ DESCRIPTIONS
// Task
// You get an array of numbers, return the sum of all of the positives ones.
//
//     Example
//     [1, -4, 7, 12] => 1 + 7 + 12 = 20
//
// Note
// If there is nothing to sum, the sum is default to 0.

// 📌 TESTS
// const { assert } = require("chai")
//
// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//         assert.strictEqual(positiveSum([1,2,3,4,5]),15);
//         assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
//         assert.strictEqual(positiveSum([]),0);
//         assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
//         assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);
//     });
// });

// ✅ SOLUTIONS
// 1 variant

function positiveSum(arr) {
    return arr.filter(i => i > 0).reduce((a, b)=>a + b, 0)
}

// 2 variant
function positiveSum(arr) {
    return arr.reduce((a, b)=> a + (b > 0 ? b : 0), 0);
}