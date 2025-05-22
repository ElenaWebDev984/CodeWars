// 🎯 Count by X

//❓ DESCRIPTIONS
// Create a function with two arguments that will return an array of the first n multiples of x.
//
//     Assume both the given number and the number of times to count will be positive numbers greater than 0.
//
// Return the results as an array or list ( depending on language ).
//
// Examples
// x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
// x = 2, n = 5  --> [2,4,6,8,10]

// export function countBy(x: number, n: number): number[] {
//     return []
// }

// 📌 TESTS
// it("countBy(1, 10)", () => assert.deepEqual(countBy(1, 10), [1,2,3,4,5,6,7,8,9,10]));
// it("countBy(2, 5)", () => assert.deepEqual(countBy(2, 5), [2,4,6,8,10]));
// it("countBy(3, 7)", () => assert.deepEqual(countBy(3, 7), [3,6,9,12,15,18,21]));
// it("countBy(50, 5)", () => assert.deepEqual(countBy(50, 5), [50,100,150,200,250]));
// it("countBy(100, 6)", () => assert.deepEqual(countBy(100, 6), [100,200,300,400,500,600]));

// ✅ SOLUTIONS
// 1 variant
export function countBy(x: number, n: number): number[] {
    const z: number[] = [];
    for (let i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}

// 2 variant
// export function countBy2(x: number, n: number): number[] {
//     return Array.from({ length: n }, (_, i) => x * (i + 1));
// }

// TODO Array.from() создаёт массив из "пустого" объекта длиной n
//
// TODO (_, i) => x * (i + 1) — функция, которая вычисляет каждый элемент
