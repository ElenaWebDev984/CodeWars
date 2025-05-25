// 🎯 Sum of positive

//❓ DESCRIPTIONS
// Task
// You get an array of numbers, return the sum of all of the positives ones.
//
//     Example
//     [1, -4, 7, 12] =>
// 1
// +
// 7
// +
// 12
//     =
//     20
// 1+7+12=20
// Note
// If there is nothing to sum, the sum is default to 0.

// 📌 TESTS
// assert.equal(solution.positiveSum([1,2,3,4,5]),15);
// assert.equal(solution.positiveSum([1,-2,3,4,5]),13);
// assert.equal(solution.positiveSum([]),0);
// assert.equal(solution.positiveSum([-1,-2,-3,-4,-5]),0);
// assert.equal(solution.positiveSum([-1,2,3,4,-5]),9);

// ✅ SOLUTIONS
// 1 variant
export function positiveSum(arr: number[]): number {
    return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
}

// 2 variant
export function positiveSum2(arr:number[]):number {
    return arr.filter((e) => e >= 0).reduce((acc, e) => acc + e , 0)
}
