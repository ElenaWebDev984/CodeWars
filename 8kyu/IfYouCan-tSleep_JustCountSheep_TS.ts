// 🎯 If you can't sleep, just count sheep!!

//❓ DESCRIPTIONS
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// export function countSheep(num: number): string {
//     return ""; // your code here
// }

// 📌 TESTS
// assert.strictEqual(countSheep(0), "");
// assert.strictEqual(countSheep(1), "1 sheep...");
// assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
// assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");

// ✅ SOLUTIONS
// 1 variant
const countSheep = function(num: number): string {
    let result = '';
    for (let i = 1; i <= num; i++) {
        result += `${i} sheep...`;
    }
    return result;
};





