// 🎯 Add property to every object in array

//❓ DESCRIPTIONS
// Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.

// For example:

// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];
// After adding the property the result should be:

// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
//     usersAnswer: null
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
//     corAnswer: 0,
//     usersAnswer: null
// }];
// The questions array is already defined for you and is not the same as the one in the example.

// 📌 TESTS
// Test.expect(questions[0].usersAnswer === null);

// ✅ SOLUTIONS
// 1 variant

function addUserAnswerProperty(questions) {
    questions.forEach(function(question) {
        question.usersAnswer = null; // Set usersAnswer to null
    });
}

// Call the function
addUserAnswerProperty(questions);

// Output the modified questions array
console.log(questions);

// 2 variant
questions.forEach(function (i) {
    i.usersAnswer = null;
});

// 3 variant
questions.forEach(x => x.usersAnswer = null);

// 4 variant
for (i=0; i<questions.length; i++) {
    questions[i].usersAnswer = null;
    };

// 5 variant
questions.forEach(function(q) {
    q.usersAnswer = null
  })

