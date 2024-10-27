// 🎯 You only need one - Beginner

//❓ DESCRIPTIONS
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// 📌 TESTS
// assert.strictEqual(check([66, 101], 66), true);
// assert.strictEqual(check([101, 45, 75, 105, 99, 107], 107), true);
// assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
// assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);

// ✅ SOLUTIONS
// 1 variant
function check(a, x) {
    return a.includes(x);
}

// 2 variant
function check(array, item) {
    let result = false;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            result = true;
            break
        }
    }
    return result
  }