// 🎯 Count of positives / sum of negatives

//❓ DESCRIPTIONS
// Given an array of integers.
//
//     Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
//
//     If the input is an empty array or is null, return an empty array.
//
//     Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// 📌 TESTS


// ✅ SOLUTIONS
// 1 variant
const countPositivesSumNegatives = (input) => {
    if (!input || input.length === 0) {
        return [];
    }

    let countPositives = 0;
    let sumNegatives = 0;
    for (let num of input) {
        if (num > 0) {
            countPositives++;
        } else if (num < 0) {
            sumNegatives += num;
        }
    }
    return [countPositives, sumNegatives];
}

// 2 variant
function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}

// 3 variant
function countPositivesSumNegatives(input) {
    if (!Array.isArray(input) || !input.length) return [];
    return input.reduce((arr, n) => {
        if (n > 0) arr[0]++;
        if (n < 0) arr[1] += n;
        return arr;
    }, [0, 0]);
}

// 4 variant
function countPositivesSumNegatives(input) {
    if (!input || input.length == 0) return [];
    let sum = 0, count = 0;
    input.forEach(function(el){ if (el > 0) count++; else sum+=el});
    return [count, sum];
}

// 5 variant
function countPositivesSumNegatives(input) {
    return !input || !input.length ? [] : [
        input.filter(n => n > 0).length,
        input.filter(n => n < 0).reduce((a, b) => a + b)
    ];
}

