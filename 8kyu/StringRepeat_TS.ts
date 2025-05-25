// 🎯 String repeat

//❓ DESCRIPTIONS
// Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.
//
// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// 📌 TESTS
// assert.equal(solution.repeatStr(3, "*"), "***");
// assert.equal(solution.repeatStr(5, "#"), "#####");
// assert.equal(solution.repeatStr(2, "ha "), "ha ha ");
// assert.equal(solution.repeatStr(0, "qwerty"), "");
// assert.equal(solution.repeatStr(0, ""), "");
// assert.equal(solution.repeatStr(5, ""), "");
// assert.equal(solution.repeatStr(6, "I"), "IIIIII");
// assert.equal(solution.repeatStr(5, "Hello"), "HelloHelloHelloHelloHello");

// ✅ SOLUTIONS
// 1 variant
export function repeatStr(n: number, s: string): string {
    return s.repeat(n);
}



