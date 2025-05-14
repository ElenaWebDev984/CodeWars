// 🎯 Sort and Star

//❓ DESCRIPTIONS
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
//
//     The returned value must be a string, and have "***" between each of its letters.
//
//     You should not remove or add elements from/to the array.


// 📌 TESTS
// assert.strictEqual(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
// assert.strictEqual(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e');


// ✅ SOLUTIONS
// 1 variant
function twoSort(s) {
    const sorted = [...s].sort();

    // Берем первый элемент отсортированного массива
    const first = sorted[0];

    // Разделяем буквы звездочками и объединяем обратно
    return first.split('').join('***');
}

// 2 variant
function twoSort(s) {
    return s.sort()[0].split('').join('***');
}


