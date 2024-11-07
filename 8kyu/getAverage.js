// 🎯 Get the mean of an array

//❓ DESCRIPTIONS
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// 📌 TESTS
// Test.assertEquals(getAverage([2,2,2,2]),2);
// Test.assertEquals(getAverage([1,2,3,4,5,]),3);
// Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);


// ✅ SOLUTIONS
// 1 variant

function getAverage(marks) {
    // Calculate the sum of the marks
    const total = marks.reduce((accum, current) => accum + current, 0);
    
    // Calculate the average and round it down
    const average = Math.floor(total / marks.length);
    
    return average; // Return the rounded down average
}

// 2 variant
function getAverage(marks){
    return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
  }

// 3 variant
function getAverage(marks){

    // calculates total number of marks
    let total = 0;
    for(let i = 0; i < marks.length; i++){
      total += marks[i];
    }
    
    /* returns total number of marks divided by number of marks
       rounded down to nearest integer */
    return Math.floor(total / marks.length);
  }

