// 🎯 Beginner - Reduce but Grow

//❓ DESCRIPTIONS
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
//
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// // 📌 TESTS
// assert.strictEqual(grow([1, 2, 3]), 6);
// assert.strictEqual(grow([4, 1, 1, 1, 4]), 16);
// assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64);


// ✅ SOLUTIONS
//  1 variant
const grow = x ((a, b) => a * b);

// 2 variant
function grow(arr) {
    if (arr.length === 0) {
        return arr;
    }
    return arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}

// 3 variant
const grow = x => {
    let res = 1;
    for (let i = 0; i < x.length; i++) {
        res *= x[i];
    }
    return res;
}

// 4 variant
const grow = (x) => x.reduce((product, num) => product * num, 1);



