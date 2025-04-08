// 🎯 Opposite number

//❓ DESCRIPTIONS
// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).
//
// Examples:
//
//     1: -1
// 14: -14
// -34: 34

// 📌 TESTS
//     assert.strictEqual(typeof opposite, 'function', 'opposite should be a function');
//     assert.strictEqual(opposite(1), -1);
//     assert.strictEqual(opposite(0), 0);
//     assert.strictEqual(opposite(4.25), -4.25);
//     assert.strictEqual(opposite(3.3333333), -3.3333333);
//     assert.strictEqual(opposite(-12525220.3325), 12525220.3325);
//     assert.strictEqual(opposite(-5), 5);

// ✅ SOLUTIONS
// 1 variant
function opposite(number) {
    return -number
}

// 2 variant
const opposite = number => -number;