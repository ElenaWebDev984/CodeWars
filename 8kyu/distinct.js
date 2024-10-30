// 🎯 Remove duplicates from list

//❓ DESCRIPTIONS
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

// 📌 TESTS
// assert.deepEqual(distinct([1]), [1]);
// assert.deepEqual(distinct([1,2]), [1,2]);
// assert.deepEqual(distinct([1,1,2]), [1,2]);

// ✅ SOLUTIONS
// 1 variant

function distinct(a) {
    // [1, 1, 2]
    const temp = {};
    const result = [];

    for (let item of a) {
        if (!temp[item]) {
            temp[item] = true;
            result.push(item);
        }
    }
    return result;
  }

  // 2 variant
  function distinct(a) {
    return Array.from(new Set(a));
  }

  // 3 variant
  function distinct(arr) {
    let res = []; 
    
    for(let i = 0; i < arr.length; i++){
      if(!res.includes(arr[i])){
        res.push(arr[i]);
      }
  }
  return res;
  }