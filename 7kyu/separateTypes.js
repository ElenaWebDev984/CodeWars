// 🎯 Separate basic types

//❓ DESCRIPTIONS
// Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

// keep order of values like in input array
// if type is not presented in input, no corresponding property are expected
// So, for this input:

// ['a', 1, 2, false, 'b']
// expected output is:

// {
//   number: [1, 2],
//   string: ['a', 'b'],
//   boolean: [false]
// }

// 📌 TESTS
// assert.deepEqual(separateTypes(['a', 1, 2, false, 'b']), {number: [1, 2],  string: ['a', 'b'], boolean: [false]});
// assert.deepEqual(separateTypes(['a', 1, 2 ]), {number: [1, 2],  string: ['a']});


// ✅ SOLUTIONS
// 1 variant

function separateTypes(input) {
    // Initialize an empty object to store the categorized values
    const result = {};
  
    // Iterate through each value in the input array
    input.forEach(value => {
      // Determine the type of the current value
      const type = typeof value;
  
      // If the type is not already a key in the result object, create an empty array for it
      if (!result[type]) {
        result[type] = [];
      }
  
      // Push the current value into the corresponding array in the result object
      result[type].push(value);
    });
  
    // Return the result object
    return result;
  }

  // 2 variant
  function separateTypes(input) {
    return input.reduce((types, value) => {
      const valueType = typeof value
      const type = types[valueType]
      types[valueType] = type ? [...type, value] : [value]
      return types
    }, {})
  }

 