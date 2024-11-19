// 🎯 Parse nice int from char problem

//❓ DESCRIPTIONS
// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

// 📌 TESTS
//  assert.strictEqual(getAge("4 years old"), 4);
// assert.strictEqual(getAge("9 years old"), 9);
// assert.strictEqual(getAge("1 year old"), 1);  


// ✅ SOLUTIONS
// 1 variant
function getAge(inputString) {
    // Извлекаем первый символ из входной строки
    const firstChar = inputString.charAt(0);
    
    // Преобразуем первый символ в целое число
    const age = parseInt(firstChar);
    
    // Возвращаем возраст
    return age;
}

// 2 variant
function getAge(inputString){
    return parseInt(inputString);
  }

  // 3 variant
  function getAge(inputString){
    return +inputString[0];
  }
