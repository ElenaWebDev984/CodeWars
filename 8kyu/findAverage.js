// 🎯 Grasshopper - Array Mean

//❓ DESCRIPTIONS
// Find Mean
// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

// 16/4 = 4
// 3. The mean (or average) of this list is 4


// 📌 TESTS
// assert.approximately(findAverage([1]), 1, 1e-9);
// assert.approximately(findAverage([1, 3, 5, 7]), 4, 1e-9);
  

// ✅ SOLUTIONS
// 1 variant

function findAverage(nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum / nums.length;
}

// 2 variant
let findAverage = function(nums){
    return nums.reduce((a, b) => a + b, 0) / nums.length;
  }

// 3 variant
const findAverage = nums => nums.reduce((a, b) => a + b) / nums.length;

console.log(findAverage([1])); // 1
console.log(findAverage([3, 2, 5, 10])); // 5
console.log(findAverage([1, 3, 5, 7])); // 4
