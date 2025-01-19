// 🎯 Multiply the strings in the array

//❓ DESCRIPTIONS
// You received an array with two strings.
// Create a function that will return their product as a string.
// E.g.

// input: ['3', '5'] => output: '15'
// input: ['2', '-3'] => output: '-6'
// input: ['9', '0'] => output: '0'

// 📌 TESTS
//  test_it(['3', '5'], "15");
//   test_it(['2', '-3'], "-6");
//   test_it(['9', '0'], "0");

// ✅ SOLUTIONS
// 1 variant
function arrMultiply(arr) {
    // Преобразуем строки в числа и умножаем их
    const product = arr.reduce((acc, num) => acc * Number(num), 1);
    // Возвращаем результат в виде строки
    return product.toString();
}

// 2 variant
const arrMultiply = ([a, b]) => `${a * b}`; 