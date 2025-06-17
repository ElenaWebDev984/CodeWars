// 🎯 Reversed Words

//❓ DESCRIPTIONS
// Complete the solution so that it reverses all of the words within the string passed in.
//
// Words are separated by exactly one space and there are no leading or trailing spaces.
//
// Example(Input --> Output):
//
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// export function reverseWords(str: string): string {
//   return str; // reverse those words
// }


// 📌 TESTS
// assert.strictEqual(reverseWords("hello world!"                 ),  "world! hello")
// assert.strictEqual(reverseWords("yoda doesn't speak like this" ),  "this like speak doesn't yoda")
// assert.strictEqual(reverseWords("foobar"                       ),  "foobar")
// assert.strictEqual(reverseWords("kata editor"                  ),  "editor kata")
// assert.strictEqual(reverseWords("row row row your boat"        ),  "boat your row row row")
// assert.strictEqual(reverseWords(""                             ),  "")

// ✅ SOLUTIONS
// 1 variant
export const reverseWords = (str: string): string => {
    const words: string[] = str.split(' ');
    return words.reverse().join(' ');
};

// 2 variant
export const reverseWords2 = (str: string): string => str.split(' ').reverse().join(' ');








