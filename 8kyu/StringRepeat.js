// 🎯 String repeat

//❓ DESCRIPTIONS
// Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.
//
// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// 📌 TESTS
//     assert.strictEqual(repeatStr(3, "*"), "***");
//     assert.strictEqual(repeatStr(5, "#"), "#####");
//     assert.strictEqual(repeatStr(2, "ha "), "ha ha ");
//     assert.strictEqual(repeatStr(0, ""), "");
//     assert.strictEqual(repeatStr(0, "I"), "");
//     assert.strictEqual(repeatStr(5, ""), "");
//     assert.strictEqual(repeatStr(6, "I"), "IIIIII");
//     assert.strictEqual(repeatStr(5, "Hello"), "HelloHelloHelloHelloHello");

// ✅ SOLUTIONS
// 1 variant
function repeatStr (n, s) {
    return s.repeat(n);
}

// 2 variant
repeatStr = (n, s) => s.repeat(n)