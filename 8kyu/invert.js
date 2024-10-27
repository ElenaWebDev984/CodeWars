// 🎯 Invert values

//❓ DESCRIPTIONS
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []

// 📌 TESTS
// assert.deepEqual(norm(invert([1,2,3,4,5])), [-1,-2,-3,-4,-5]);
// assert.deepEqual(norm(invert([1,-2,3,-4,5])), [-1,2,-3,4,-5]);
// assert.deepEqual(norm(invert([])), []);
// assert.deepEqual(norm(invert([0])), [0]);

// ✅ SOLUTIONS
// 1 variant

function invert(array) {
    // const el = array[0]
    // return -el;
    const invertArray = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element === 0) {
            invertArray.push(0)
        } else {
            const invertEl = -element;
            invertArray.push(invertEl);
        }
    }
    return invertArray;
 }

 console.log(invert([1,2,3,4,5])); // [-1,-2,-3,-4,-5]
 console.log(invert([1,-2,3,-4,5])); // [-1,2,-3,4,-5]
 console.log(invert([])); // []
 console.log(invert([0])); // [0]

 // 2 variant
 function invert(array) {
    const invertArray = array.map( (el) => {
    const invertEl = -el
    if (el === 0) {
        return 0
    }else {
        const invertEl = -el
        return invertEl
    }
} )

return invertArray
 }

 console.log(invert([1,2,3,4,5])); // [-1,-2,-3,-4,-5]
 console.log(invert([1,-2,3,-4,5])); // [-1,2,-3,4,-5]
 console.log(invert([])); // []
 console.log(invert([0])); // [0]

 // 3 variant
 function invert(array) {
    const invertArray = array.map( (el) => {
    return el === 0 ? 0 : -el
} )

return invertArray
 }

 console.log(invert([1,2,3,4,5])); // [-1,-2,-3,-4,-5]
 console.log(invert([1,-2,3,-4,5])); // [-1,2,-3,4,-5]
 console.log(invert([])); // []
 console.log(invert([0])); // [0]
 