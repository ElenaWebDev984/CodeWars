// 🎯 Beginner Series #1 School Paperwork

//❓ DESCRIPTIONS
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

// 📌 TESTS
// assert.strictEqual(paperwork(5,5), 25, 'Failed at paperwork(5, 5)');
// assert.strictEqual(paperwork(5,-5), 0, 'Failed at paperwork(5, -5)');
// assert.strictEqual(paperwork(-5,-5), 0, 'Failed at paperwork(-5, -5)');
// assert.strictEqual(paperwork(-5,5), 0, 'Failed at paperwork(-5, 5)');
// assert.strictEqual(paperwork(5,0), 0, 'Failed at paperwork(5, 0)');

// ✅ SOLUTIONS
// 1 variant 

function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0
}

// 2 variant
function paperwork(n, m) {
    if (m < 0 || n < 0) {
      return 0;
    }
    return m * n;
  }

  // 3 variant
  function paperwork(n, m) {
    return n < 0 || m < 0 ? 0 : n * m;
}

// 4 variant
paperwork = (n, m) => n < 0 || m < 0 ? 0 : n * m
