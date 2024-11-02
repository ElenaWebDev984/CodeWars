// 🎯 Even or Odd

//❓ DESCRIPTIONS
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// 📌 TESTS
// it("2 is even", () => {
//     assert.strictEqual(evenOrOdd(2), "Even");
//   });
//   it("7 is odd", () => {
//     assert.strictEqual(evenOrOdd(7), "Odd");
//   });
//   it("-42 is even", () => {
//     assert.strictEqual(evenOrOdd(-42), "Even");
//   });
//   it("-7 is odd", () => {
//     assert.strictEqual(evenOrOdd(-7), "Odd");
//   });
//   it("0 is even", () => {
//     assert.strictEqual(evenOrOdd(0), "Even");
//   });

// ✅ SOLUTIONS
// 1 variant

function evenOrOdd(number) {
  if (number % 2 == 0) {
    return "Even"
  } else {
    return "Odd"
  }
}

// 2 variant
function evenOrOdd(number) {
    return number % 2 == 0 ? "Even" : "Odd"
}