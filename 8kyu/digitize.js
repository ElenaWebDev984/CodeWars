// 🎯 Convert number to reversed array of digits

//❓ DESCRIPTIONS
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// 📌 TESTS
// assert.deepEqual(digitize(35231),[1,3,2,5,3]);
// assert.deepEqual(digitize(0),[0]);

// ✅ SOLUTIONS

function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }
  console.log('digitize: ', digitize(35231)); // [1,3,2,5,3]
  console.log('digitize: ', digitize(0)); // [0]

