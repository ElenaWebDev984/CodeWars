// 🎯 Contamination #1 -String-

//❓ DESCRIPTIONS
// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// Starting with the original text, and given a character, return the text once it has been mutated so that all of the characters in the original text have been replaced with the character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

// 📌 TESTS
// assert.strictEqual(contamination("abc","z"), "zzz")
// assert.strictEqual(contamination("","z"), "")
// assert.strictEqual(contamination("abc",""), "")
// assert.strictEqual(contamination("_3ebzgh4","&"), "&&&&&&&&")
// assert.strictEqual(contamination("//case"," "), "      ")

// ✅ SOLUTIONS
// 1 variant

function contamination(text, char){
    // Check if text or char is empty
    if (text === '' || char === '') {
        return '';
    }

    // Create a new string consisting of the char repeated text.length times
    return char.repeat(text.length);
}

// 2 variant
function contamination(text, char) {
    return text.split("").fill(char).join("");
  }  

// 3 variant
function contamination(text, char) {
    return char.repeat(text.length);
  }

// 4 variant
function contamination(text, char) {
    return text.replace(/./g, char);
  }

  // 5 variant
  function contamination(text, char) {
    if (text.length === 0 || char.length === 0) {
      return '';
    } else {
      let str = '';
      for (let i = 0; i < text.length; i += 1) {
        str += char;
      }
      return str;
    }
  }