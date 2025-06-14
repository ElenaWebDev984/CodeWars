// 🎯 Removing Elements

//❓ DESCRIPTIONS
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
//
//     Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
//
// None of the arrays will be empty, so you don't have to worry about that!

// function removeEveryOther(arr){
//     //your code here
// }



// 📌 TESTS
// assert.deepEqual(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
// assert.deepEqual(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
// assert.deepEqual(removeEveryOther([[1, 2]]), [[1, 2]]);
// assert.deepEqual(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);

// ✅ SOLUTIONS
// 1 variant
const removeEveryOther = (arr) => arr.filter((el, index) => index % 2 === 0);

// 2 variant
const removeEveryOther = (arr) => {
    return arr.filter((el, index) => index % 2 === 0);
}






