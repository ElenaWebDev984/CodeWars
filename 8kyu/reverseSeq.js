// 🎯 Reversed sequence

//❓ DESCRIPTIONS
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// 📌 TESTS
// assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);

// ✅ SOLUTIONS
// 1 variant

const reverseSeq = n => {
    let sq = [];

    while (n > 0) {
        sq.push(n);
        n--
    }
    return sq;
  };

  // 2 variant
  const reverseSeq = n => {
    let arr = [];
      for (let i=n; i>0; i--) {
        arr.push(i);
        } return arr;
    };

  // 3 variant
const reverseSeq = n => {
  return Array(n).fill(0).map((e, i) => n - i );
};

  // 4 variant
  const reverseSeq = n => {
    let answer = [];          //intialize an array
    
    for (let i=n; i>0; i--){  //loop down from n to 1
      answer.push(i);         //push each i to the answer array
    }
    
    return answer;            //return answer;
  };