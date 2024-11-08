// 🎯 Calculate average

//❓ DESCRIPTIONS
// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

// 📌 TESTS
// assert.strictEqual(findAverage([1,1,1]), 1);
// assert.strictEqual(findAverage([1,2,3]), 2);
// assert.strictEqual(findAverage([1,2,3,4]), 2.5);

// ✅ SOLUTIONS
// 1 variant

function findAverage(array) {
    if(array.length == 0) {
        return 0
    }
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        sum += array[i]
        
    }
    return sum / array.length
  }

  // 2 variant
  function findAverage(array) {
    return array.length == 0 ? 0 : array.reduce((total, v) => total + v) / array.length
  }

// 3 variant
  var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }
