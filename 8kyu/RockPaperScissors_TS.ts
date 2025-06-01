// 🎯 Rock Paper Scissors

//❓ DESCRIPTIONS
// Let's play! You have to return which player won! In case of a draw return Draw!.
//
// Examples(Input1, Input2 --> Output):
//
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// 📌 TESTS
// assert.strictEqual(rps('rock', 'scissors'), getMsg(1));
// assert.strictEqual(rps('scissors', 'paper'), getMsg(1));
// assert.strictEqual(rps('paper', 'rock'), getMsg(1));

// ✅ SOLUTIONS
// 1 variant
export const rps = (p1: string, p2: string): string => {
    if (p1 === p2) return "Draw!";

    const rules: {[key: string]: string} = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (rules[p1] === p2) {
        return "Player 1 won!";
    } else {
        return "Player 2 won!";
    }
};




