// 🎯 Convert a Boolean to a String

//❓ DESCRIPTIONS
// Implement a function which convert the given boolean value into its string representation.
//
//     Note: Only valid inputs will be given.

// 📌 TESTS
// Test.assertEquals(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
// Test.assertEquals(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');

// ✅ SOLUTIONS
// 1 variant
const booleanToString = (b) => b.toString();

// 2 variant
function booleanToString(b){
    return b.toString();
}

// 3 variant
function booleanToString(b){
    return b ? 'true' : 'false';
}

// 4 variant
function booleanToString(b){
    return String(b);
}

// 5 variant
function booleanToString(b) {
    return b + '';
}

// 6 variant
const booleanToString = b => `${b}`;  // Шаблонные строки тоже преобразуют boolean в string