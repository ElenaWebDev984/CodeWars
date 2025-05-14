// 🎯 Beginner Series #2 Clock

//❓ DESCRIPTIONS
// Clock shows h hours, m minutes and s seconds after midnight.
//
//     Your task is to write a function which returns the time since midnight in milliseconds.
//
//     Example:
// h = 0
// m = 1
// s = 1
//
// result = 61000
// Input constraints:
//
//     0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59


// 📌 TESTS
// assert.strictEqual(past(0,1,1),61000)
// assert.strictEqual(past(1,1,1),3661000)
// assert.strictEqual(past(0,0,0),0)
// assert.strictEqual(past(1,0,1),3601000)
// assert.strictEqual(past(1,0,0),3600000)


// ✅ SOLUTIONS
// 1 variant
function past(h, m, s) {
    return (h * 3600 + m * 60 + s) * 1000;
}

// 2 variant
function past(h, m, s){
    const setTime = new Date().setHours(h, m, s);
    const midnight = new Date().setHours(0, 0, 0);

    return Math.round(setTime - midnight);
}


