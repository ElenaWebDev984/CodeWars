// 🎯 Return Negative

//❓ DESCRIPTIONS
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
//
//     Examples
//     make_negative(1);  # return -1
// make_negative(-5); # return -5
// make_negative(0);  # return 0
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// 📌 TESTS
// assert.equal(makeNegative(42), -42);

// ✅ SOLUTIONS
// 1 variant
export const makeNegative = (num: number): number => {
    return num > 0 ? -num : num
};

// 2 variant
export const makeNegative2 = (num: number): number => -Math.abs(num);

