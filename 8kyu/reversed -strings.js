// 🎯 Reversed Strings

//❓ DESCRIPTIONS
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// 📌 TESTS
// assert.strictEqual(solution('world'), 'dlrow');
// assert.strictEqual(solution('hello'), 'olleh');
// assert.strictEqual(solution(''), '');
// assert.strictEqual(solution('h'), 'h');

// ✅ SOLUTIONS
// 1 variant

function solution(str){
  return str.split('').reverse().join('');
}

console.log("solution: ", solution('word'));


// 2 variant
function solution(str){
    const solution = str => str.split('').reverse().join('');
  }
  console.log("solution: ", solution('bread'));

  // 3 variant
function solution(s){
    var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
  }
  console.log("solution: ", solution('sleeve'));
