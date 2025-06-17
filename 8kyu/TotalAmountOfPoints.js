// 🎯 Total amount of points

//❓ DESCRIPTIONS
// Our football team has finished the championship.
//
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
//
// For example: ["3:1", "2:2", "0:1", ...]
//
// Points are awarded for each match as follows:
//
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
//
// Notes:
//
// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// const points = (games)=> {

// }


// 📌 TESTS
// assert.strictEqual(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);
// assert.strictEqual(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10);
// assert.strictEqual(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , 0);
// assert.strictEqual(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15);
// assert.strictEqual(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) , 12);

// ✅ SOLUTIONS
// 1 variant
const points = games => games.reduce((total, game) => {
    const [x, y] = game.split(':').map(Number);
    return total + (x > y ? 3 : x === y ? 1 : 0);
}, 0);

// 2 variant
function points(games) {
    let total = 0;
    games.map(game => {
        if (game[0] === game[2]) {
            total += 1;
        } else if (game[0] > game[2]) {
            total += 3;
        }
    });
    return total;
}

// 3 variant
const points = (games) => {
    return games.reduce((total, game) => {
        const [x, y] = game.split(':').map(Number);
        return total + (x > y ? 3 : x === y ? 1 : 0);
    }, 0);
};







