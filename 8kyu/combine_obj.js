// 🎯 Combine objects

//❓ DESCRIPTIONS
// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

// An example:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.

// 📌 TESTS
//   testDeepEqual(combine(objA, objB), { a: 13, b: 20, c: 36, d: 3 })
//   testDeepEqual(combine(objA, objC), { a: 15, b: 20, c: 30, d: 11, e: 8 })

//   testDeepEqual(combine(objA, objB, objC), { a: 18, b: 20, c: 36, d: 14, e: 8 })
//   testDeepEqual(combine(objA, objC, objD), { a: 15, b: 20, c: 33, d: 11, e: 8 })


// ✅ SOLUTIONS
// 1 variant

function combine(...objects) {
    const result = {}; // Create an empty object to hold the combined results

    // Iterate over each object passed to the function
    for (const obj of objects) {
        // For each key in the current object
        for (const key in obj) {
            // If the key already exists in the result, add the values
            if (result.hasOwnProperty(key)) {
                result[key] += obj[key];
            } else {
                // If it doesn't exist, set the key in the result object
                result[key] = obj[key];
            }
        }
    }
    
    return result; // Return the combined object
}

// 2 variant
function combine() {
    let obj = {}
  
    for (let i = 0; i < arguments.length; i++) {
          for (let key in arguments[i]) {
            obj[key] = obj[key] ? obj[key] + arguments[i][key]: arguments[i][key]
          }
    }
  
    return obj;
  }

// 3 variant
const combine = (...params) => params.reduce((a, b) => {
    for (const x in b) { a[x] = x in a ? a[x] + b[x] : b[x] };
    return a;
   }, {});