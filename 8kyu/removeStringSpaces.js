// 🎯 Remove String Spaces

//❓ DESCRIPTIONS
// Write a function that removes the spaces from the string, then return the resultant string.
//
// Examples (Input -> Output):
//
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

// 📌 TESTS
// testIt('8 j 8   mBliB8g  imjB8B8  jl  B', '8j8mBliB8gimjB8B8jlB');
// testIt('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd', '88Bifk8hB8BB8BBBB888chl8BhBfd');
// testIt('8aaaaa dddd r     ', '8aaaaaddddr');

// ✅ SOLUTIONS
// 1 variant
function noSpace(x) {
    return x.replace(/ /g, '')
}

// 2 variant
const noSpace = x => x.replace(/ /g, "");

// 3 variant
function noSpace(x) {
    return x.replaceAll(' ', '');
}

// 4 variant
function noSpace(x){
    return x.replace(/\s/g, '');
}

