// 🎯 Find the first non-consecutive number

//❓ DESCRIPTIONS
// Your task is to find the first element of an array that is not consecutive.
//
//     By not consecutive we mean not exactly 1 larger than the previous element of the array.
//
//     E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
//
// If the whole array is consecutive then return null2.
//
//     The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// export function firstNonConsecutive (arr: number[]) : null | number {
//   return null
// }


// 📌 TESTS
// assert.strictEqual(first, null)
// assert.strictEqual(first, 6)

// ✅ SOLUTIONS
// 1 variant
export function firstNonConsecutive(arr: number[]): number | null {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + 1) {
            return arr[i];
        }
    }
    return null;
}

// 2 variant
export function firstNonConsecutive2 (arr: number[]) : undefined | number {
    return arr.find((currentValue, index, array) => {return currentValue - array[index - 1] > 1});
}






