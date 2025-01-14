// 🎯 Sum of differences in array

//❓ DESCRIPTIONS
// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// 📌 TESTS
// assert.strictEqual(sumOfDifferences([1, 2, 10]), 9);

// ✅ SOLUTIONS
// 1 variant

function sumOfDifferences(arr) {
    // Сортируем массив в порядке убывания
    arr.sort((a, b) => b - a);
    // Инициализируем переменную для суммы
    let sum = 0;
    // Проходим по массиву и суммируем разности
    for (let i = 0; i < arr.length - 1; i++) {
        sum += arr[i] - arr[i + 1];
    }
    return sum;
}

// 2 variant
function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

// 3 variant
const sumOfDifferences = arr => arr
  .sort((a, b) => b - a)
  .map((a, i) => a - arr[i + 1] || 0)
  .reduce((a, b) => a + b, 0);

// 4 variant
function sumOfDifferences(arr) {
  arr.sort((a, b) => a - b);
  let b = 0;
  for(let a = arr.length - 1; a > 0; a--) {
    b += arr[a] - arr[a - 1];
  }
  return b;
}
