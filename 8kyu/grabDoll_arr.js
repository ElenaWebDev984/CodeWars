// 🎯 Training JS #11: loop statement --break,continue

//❓ DESCRIPTIONS
// We have seen break in the switch statement, it can jump out the switch statement. it can also be used in the loop statement. an example:

// function findFirstOddNumber(arr){
//     var result;
//     for (var i=0;i<arr.length;i++){
//       if (arr[i]%2==1){
//         result=arr[i];
//         break;
//       }
//     }
//     return result;
//   }
//   In this example, for loop traverse the array arr. when the first odd number found, break statement will jump out the for loop.
  
//   In the loop statement, we can use continue skipping some code. for example, the following code ignores negative values:
  
//   function dontDisplayNegative(arr){
//     for (var i=0;i<arr.length;i++){
//       if (arr[i]<0) continue;   
//       console.log(arr[i])
//     }
//   }
//   In this example, console.log(arr[i]) is never executed for negative element. thanks to continue.
  
//   Through the use of break and continue, you can make the loop statement more flexible and convenient.
  
//   Ok, lesson is over. let's us do some task with break and continue.
  
//   Task
//   Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.
  
//   You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it.
  
//   When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.
  
//   Return the bag after for loop finished.
  
//   You should use for, break and continue in your code. otherwise, your solution may not pass this kata.
  
//   If you forgot how to push an element to array, please refer to lesson 4.

// 📌 TESTS
//  Test.assertSimilar(grabDoll(["Mickey Mouse","Hello Kitty","Snow white"]),["Hello Kitty"]);
// Test.assertSimilar(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Snow white"]),["Hello Kitty","Hello Kitty"]);
// Test.assertSimilar(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"]),["Hello Kitty","Hello Kitty","Barbie doll"]);
// Test.assertSimilar(grabDoll(["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"]),["Barbie doll","Hello Kitty","Hello Kitty"]);


// ✅ SOLUTIONS
// 1 variant

function grabDoll(dolls) {
    var bag = [];
    
    // Loop through each doll in the dolls array
    for (var i = 0; i < dolls.length; i++) {
        // Check if the doll is one that we want to add to the bag
        if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
            bag.push(dolls[i]); // Add the doll to the bag
            
            // Check if the bag is full (contains 3 items)
            if (bag.length === 3) {
                break; // Exit the loop if bag is full
            }
        } else {
            continue; // Skip the current iteration for unwanted items
        }
    }
    
    return bag; // Return the final contents of the bag
}

// 2 variant
function grabDoll(dolls){
    var bag=[];
    
    for(var i = 0; i < dolls.length; i++) {
    
      if(dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll")
        bag.push(dolls[i]);
      else
        continue;
        
      if(bag.length === 3) break;
    }
    
    return bag;
  }