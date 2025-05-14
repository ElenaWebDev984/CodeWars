// 🎯 Is there a vowel in there?

//❓ DESCRIPTIONS
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
//
//     If they are, change the array value to a string of that vowel.
//
//     input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Return the resulting array.


// 📌 TESTS
// assert.strictEqual(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
// assert.strictEqual(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e');


// ✅ SOLUTIONS
// 1 variant
function isVow(a) {
    const vowelCodes = {
        97: 'a',
        101: 'e',
        105: 'i',
        111: 'o',
        117: 'u'
    };

    return a.map(num => vowelCodes[num] || num);
}




