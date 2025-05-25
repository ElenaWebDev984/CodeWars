// 🎯 Even or Odd

//❓ DESCRIPTIONS
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// 📌 TESTS
// assert.deepEqual(countBy(1,10), [1,2,3,4,5,6,7,8,9,10], "Array does not match")
// assert.deepEqual(countBy(2,5), [2,4,6,8,10], "Array does not match")

// ✅ SOLUTIONS
// 1 variant
export function evenOrOdd(n:number):string {
    return n % 2 === 0 ? 'Even' : 'Odd';
}
