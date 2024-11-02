// 🎯 Double Char

//❓ DESCRIPTIONS
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
//  "String"      -> "SSttrriinngg"
//  "Hello World" -> "HHeelllloo  WWoorrlldd"
//  "1234!_ "     -> "11223344!!__  "

// 📌 TESTS
// Test.assertEquals(doubleChar("abcd"), "aabbccdd");
// Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
// Test.assertEquals(doubleChar("1337"), "11333377");
// Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
// Test.assertEquals(doubleChar("123456"), "112233445566");
// Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");

// ✅ SOLUTIONS
// 1 variant

function doubleChar(str) {
    let newStr = ""

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        newStr += char + char
    }
    return newStr
  }

  // 2 variant
  function doubleChar(str) {
    return str.split("").map(c => c + c).join("")
  }