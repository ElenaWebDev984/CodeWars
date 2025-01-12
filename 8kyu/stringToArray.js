// 🎯 Convert a string to an array

//❓ DESCRIPTIONS
// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]


// 📌 TESTS
// assert.deepEqual(stringToArray("Robin Singh"), ["Robin", "Singh"]);
// assert.deepEqual(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);
  

// ✅ SOLUTIONS
// 1 variant

function stringToArray(string) {
    return string.split(' ');
}

// 2 variant

const stringToArray = string => string.split(' ');
