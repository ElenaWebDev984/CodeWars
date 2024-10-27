// 🎯 Beginner - Lost Without a Map

//❓ DESCRIPTIONS
// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// 📌 TESTS
// assert.deepEqual(maps([1, 2, 3]), [2, 4, 6]);
// assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
// assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 

// ✅ SOLUTIONS
// 1 variant

function maps(x) {
    return x.map(n => n * 2);
}

// 2 variant
function maps(array){
    const newArray = [];
    const arrayLength = array.length

    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2)
    }
    return newArray
}

// 3 variant
function maps(array) {
    const newArray = array.map(elem => {
        return elem * 2
    })
    return newArray
}
