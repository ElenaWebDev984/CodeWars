// 🎯 Abbreviate a Two Word Name

//❓ DESCRIPTIONS
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
//     The output should be two capital letters with a dot separating them.
//
//     It should look like this:
//
// Sam Harris => S.H
//
// patrick feeney => P.F

// 📌 TESTS
// assert.strictEqual(abbrevName("Sam Harris"), "S.H");
// assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
// assert.strictEqual(abbrevName("Evan Cole"), "E.C");
// assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
// assert.strictEqual(abbrevName("David Mendieta"), "D.M");

// ✅ SOLUTIONS
// 1 variant
function abbrevName(name){
    const parts = name.split(' ');
    const initials = parts.map(part => part[0].toUpperCase()).join('.');
    return initials;
}

// 2 variant
function abbrevName(name){
    return name.split(' ').map(i => i[0].toUpperCase()).join('.');
}

// 3 variant
const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()


