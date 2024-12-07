// 🎯 Is the string uppercase?

//❓ DESCRIPTIONS
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

// 📌 TESTS
// assert.property("", "isUpperCase", 'Must define the prototype isUpperCase')
// assert.strictEqual('c'.isUpperCase(), false, 'c is not upper case');
// assert.strictEqual('C'.isUpperCase(), true, 'C is upper case');
// assert.strictEqual('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
// assert.strictEqual('HELLO I AM DONALD'.isUpperCase(), true, 'HELLO I AM DONALD is upper case');
// assert.strictEqual('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
// assert.strictEqual('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');

// ✅ SOLUTIONS
// 1 variant

String.prototype.isUpperCase = function() {
    // Проходим по каждому символу в строке
    for (let i = 0; i < this.length; i++) {
        // Проверяем, является ли символ строчной буквой
        if (this[i] >= 'a' && this[i] <= 'z') {
            return false;
        }
    }
    // Если строчных букв не найдено, возвращаем true
    return true;
};

// 2 variant
String.prototype.isUpperCase=function() {return this==this.toUpperCase()}

// 3 variant
String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this.toString();
  }

// 4 variant
String.prototype.isUpperCase = function() {
    return this.toUpperCase() == this;
  }