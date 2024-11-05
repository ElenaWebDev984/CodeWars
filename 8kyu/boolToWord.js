// 🎯 Convert boolean values to strings 'Yes' or 'No'.

//❓ DESCRIPTIONS
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// 📌 TESTS
// assert.strictEqual(boolToWord(true), 'Yes')
// assert.strictEqual(boolToWord(false), 'No')

// ✅ SOLUTIONS
// 1 variant

function boolToWord( bool ){
    return bool ? "Yes" : "No";
  }

  // 2 variant
  function boolToWord( bool ){
    if (bool) {
      return 'Yes';
    } else {
      return 'No';
    }
  }

  