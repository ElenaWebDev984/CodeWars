// 🎯 Get the Middle Character

//❓ DESCRIPTIONS
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.

// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

// ✅ SOLUTIONS
// 1 variant

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// 2 variant
function getMiddle(s) {
    const length = s.length; // Get the length of the string
    const midIndex = Math.floor(length / 2); // Calculate the middle index

    if (length % 2 === 0) {
        // If the length is even, return the two middle characters
        return s[midIndex - 1] + s[midIndex];
    } else {
        // If the length is odd, return the middle character
        return s[midIndex];
    }
}

// 3 variant
function getMiddle(s) {
    var middle = s.length / 2;
    return (s.length % 2) 
      ? s.charAt(Math.floor(middle))
      : s.slice(middle - 1, middle + 1);
  }

// 4 variant
function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}