// 🎯 Grasshopper - If/else syntax debug

//❓ DESCRIPTIONS
// If/else syntax debug
// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

// checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

// The function receives one parameter health which will always be a whole number between -10 and 10.

// 📌 TESTS
// Test.assertEquals(checkAlive(5), true)
// Test.assertEquals(checkAlive(0), false)

// ✅ SOLUTIONS
// 1 variant

function checkAlive (health) {
    if (health <= 0) {
      return false
    } else {
      return true
    }
  }
  console.log(checkAlive(5));
  console.log(checkAlive(0));

  // 2 variant
  function checkAlive(health) {
    return health > 0;
  }

  // 3 variant
  const checkAlive = (health) => health > 0
  
  