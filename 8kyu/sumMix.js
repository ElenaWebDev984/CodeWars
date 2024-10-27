// 🎯 Sum Mixed Array

//❓ DESCRIPTIONS
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// 📌 TESTS
// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);

// ✅ SOLUTIONS
// 1 variant

function sumMix(array){
    return array.reduce((acc, item) => {
        return acc + Number(item)
    }, 0)
}

// 2 variant
function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }

// 3 variant
function sumMix(x){
    let result = 0;
    for (let n of x) {
      result += parseInt(n);
    }
    return result;
  }

  