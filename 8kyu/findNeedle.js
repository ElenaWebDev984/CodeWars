// 🎯 A Needle in the Haystack

//❓ DESCRIPTIONS
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6"

// 📌 TESTS
// Test.assertNotEquals(findNeedle(haystack_1), undefined, "Your function didn't return anything");
// Test.assertEquals(findNeedle(haystack_1), 'found the needle at position 3')
// Test.assertEquals(findNeedle(haystack_2), 'found the needle at position 5') 
// Test.assertEquals(findNeedle(haystack_3), 'found the needle at position 30')

// ✅ SOLUTIONS
// 1 variant

function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}

// 1 variant
function findNeedle(array) {
    const index = array.indexOf("needle");

    const result = `found the needle at position ${index}`;

    return result
  }

// 2 variant
  function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`;
  }

  
