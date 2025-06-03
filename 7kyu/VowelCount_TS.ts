// 🎯 Vowel Count

//❓ DESCRIPTIONS
// Return the number (count) of vowels in the given string.
//
//     We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.

// export class Kata {
//     static getCount(str: string): number {
//         // your code here
//     }
// }

// 📌 TESTS
// assert.strictEqual(solution.Kata.getCount("abracadabra"), 5)

// ✅ SOLUTIONS
// 1 variant
export class Kata {
    static getCount(str: string): number { // ← вот это важно
        return (str.match(/[aeiou]/g) || []).length;
    }
}






