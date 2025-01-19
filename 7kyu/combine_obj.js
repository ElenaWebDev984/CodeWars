// 🎯 Combine objects

//❓ DESCRIPTIONS
// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

// An example:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.

// 📌 TESTS
// assert.deepEqual(combine(objA, objB), { a: 13, b: 20, c: 36, d: 3 });
// assert.deepEqual(combine(objA, objC), { a: 15, b: 20, c: 30, d: 11, e: 8 });


// ✅ SOLUTIONS
// 1 variant
function combine(...objects) {
    const result = {};

    objects.forEach(obj => {
        Object.keys(obj).forEach(key => {
            // Если ключ уже существует в результате, добавляем значение
            // Иначе просто присваиваем значение
            result[key] = (result[key] || 0) + obj[key];
        });
    });

    return result;
}

