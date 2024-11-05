// 🎯 Return Negative

//❓ DESCRIPTIONS
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// 📌 TESTS
// Test.assertEquals(makeNegative(42), -42);

// ✅ SOLUTIONS
// 1 variant

function makeNegative(num) {
    // If num is positive, return its negative; if negative or zero, return it as is
    return num > 0 ? -num : num;
  }

  // 2 variant
  function makeNegative(num) {
    return -Math.abs(num);
  }