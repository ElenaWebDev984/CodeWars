// 🎯 Fake Binary

//❓ DESCRIPTIONS
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// 📌 TESTS
// assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
// assert.strictEqual(fakeBin('509321967506747'), '101000111101101'); 
// assert.strictEqual(fakeBin('366058562030849490134388085'), '011011110000101010000011011');

// ✅ SOLUTIONS
// 1 variant

function fakeBin(x){
    let result = '';
    for (let i = 0; i < x.length; i++) {
        result += Number(x[i]) >= 5 ? '1' : '0'
        
    }
    return result
}

// 2 variant
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

// 3 variant
function fakeBin(x){
    let result = '';
    for(let i = 0; i < x.length; i++){
      x[i] < 5 ? result += 0 : result += 1;
    }
    return result;
  }