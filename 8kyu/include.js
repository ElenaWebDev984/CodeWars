// 🎯 Enumerable Magic - Does My List Include This?

//❓ DESCRIPTIONS
// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.


// 📌 TESTS
// assert.strictEqual(include([1,2,3,4], 3), true )
// assert.strictEqual(include([1,2,4,5], 3), false)
// assert.strictEqual(include([], 3),        false)

// ✅ SOLUTIONS
// 1 variant

function include(arr, item){
   for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element === item) return true;
   }
   return false;
  }

  // 2 variant
  function include(arr, item){
   return arr.includes(item);
 }

 // 3 variant
 const include = (arr, item) => arr.includes(item);