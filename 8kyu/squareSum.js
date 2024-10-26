// 🎯 Square(n) Sum

//❓ DESCRIPTIONS
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 

// 📌 TESTS
// assert.strictEqual(squareSum([1,2]), 5);
// assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
// assert.strictEqual(squareSum([]), 0);

// ✅ SOLUTIONS
// 1 variant

function squareSum(numbers){
    return numbers
    // const el1 = numbers[]
    // const squareEl1 : number = Math.pow(el1, y:2)

    // const el2 = numbers[1]
    // const squareEl2 = el2 ** 2

    // console.log('squareEl1: ', squareEl1)
    // console.log('squareEl2: ', squareEl2)

    for (let i = 0; i < numbers.length; i++) {
        const el = numbers[i]
        const squareEl = el **2
        console.log('iteration: ', i, 'squareEl ', squareEl)
    }
        
}

console.log(squareSum(numbers[1,2]))
