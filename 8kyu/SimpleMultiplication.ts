// 🎯 Simple multiplication

//❓ DESCRIPTIONS
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// function simpleMultiplication(number) {
//     // your code........
// }

// 📌 TESTS
// assert.strictEqual(simpleMultiplication(2),16,'Should return given argument times eight...')
// assert.strictEqual(simpleMultiplication(1),9, 'Should return given argument times nine...')
// assert.strictEqual(simpleMultiplication(8),64,'Should return given argument times eight...')
// assert.strictEqual(simpleMultiplication(4),32,'Should return given argument times eight...')
// assert.strictEqual(simpleMultiplication(5),45,'Should return given argument times nine...')

// ✅ SOLUTIONS
// 1 variant
export function simpleMultiplication(num: number): number {
    return num * (num % 2 ? 9 : 8);
}

