// 🎯 Reversed String

//❓ DESCRIPTIONS
// Complete the solution so that it reverses the string passed into it.
//
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// 📌 TESTS
// assert.equal(solution.solution('world'), 'dlrow');
// assert.equal(solution.solution('hello'), 'olleh');
// assert.equal(solution.solution(''), '');
// assert.equal(solution.solution('h'), 'h');

// ✅ SOLUTIONS
// 1 variant
export function solution(str: string): string {
    return str.split("").reverse().join("");
}






