// 🎯 Reverse a Number

//❓ DESCRIPTIONS
// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

// 📌 TESTS
// assert.strictEqual(reverseNumber(123), 321)
// assert.strictEqual(reverseNumber(-123), -321, 'Negative Numbers should be preserved')
// assert.strictEqual(reverseNumber(1000), 1, 'Should handle numbers ending with "0"')
// assert.strictEqual(reverseNumber(4321234), 4321234)
// assert.strictEqual(reverseNumber(5), 5)
// assert.strictEqual(reverseNumber(0), 0)
// assert.strictEqual(reverseNumber(98989898), 89898989)

// ✅ SOLUTIONS
// 1 variant

function reverseNumber(n) {
    const isPositive = n >= 0;
    const str = Math.abs(n).toString();
    const digits = str.split(''); // 123 -> ['1', '2', '3']
    const rev = digits.reverse(); // rev -> ['3', '2', '1']
    const joinedStr = rev.join(''); // '321'
    const num = Number(joinedStr);
    return isPositive ? num : -num;
  }