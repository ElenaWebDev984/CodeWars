// 🎯 Remove First and Last Character

//❓ DESCRIPTIONS
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

// 📌 TESTS
// assert.equal(removeChar('eloquent'), 'loquen');
// assert.equal(removeChar('country'), 'ountr');
// assert.equal(removeChar('person'), 'erso');
// assert.equal(removeChar('place'), 'lac');
// assert.equal(removeChar('ok'), '');

// ✅ SOLUTIONS
// 1 variant
export function removeChar(str: string): string {
    return str.slice(1, str.length - 1);
}

// 2 variant
export function removeChar2(str: string): string {
    return str.slice(1,-1);
}








