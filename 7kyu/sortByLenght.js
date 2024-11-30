// 🎯 Sort array by string length

//❓ DESCRIPTIONS
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

// 📌 TESTS
// Test.assertDeepEquals(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);
// Test.assertDeepEquals(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);
// Test.assertDeepEquals(sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]);

// ✅ SOLUTIONS
// 1 variant

function sortByLength(array) {
    // Use the sort method with a comparison function that compares the lengths of the strings
    return array.sort((a, b) => a.length - b.length);
}

