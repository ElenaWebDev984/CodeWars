// 🎯 Convert boolean values to strings 'Yes' or 'No'.

//❓ DESCRIPTIONS
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// 📌 TESTS


// ✅ SOLUTIONS
// 1 variant
export const boolToWord = (bool: boolean): string => {
    return bool ? "Yes" : "No";
};

// 2 variant
export const boolToWord2 = (bool: boolean): string => bool ? "Yes" : "No";

// 3 variant
