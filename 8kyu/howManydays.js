// 🎯 Training JS #8: Conditional statement--switch

//❓ DESCRIPTIONS
// In JavaScript, switch can replace multiple if statements.

// switch(n){
//     case 1:  
//       code block
//       break;
//     case 2:
//       code block
//       break;
//     case ...:
//       code block
//       break;
  
    // default:       //default is optional, sometimes it can be omitted
      //code block
                   //The last one does not need break
//   }
//   switch is the keyword and n is the variable to switch. case 1 means when n===1. Following the ":" you can add your code for what to do in that case. The keyword break is used as termination - if you forget break, the code will continue running through the other case statements and default until a break appears. If no case statements match, default is entered.
  
//   In some instances, the switch statement is clearer than the if..else statement.
  
//   For example, we can write a function to calculate what day today is, like this:
  
//   function whatDayIsToday(n){
    // getDay() is a method of Date() - we will learn this later
    // var day=new Date().getDay(),x; 
    // switch (day){
    //   case 0:
    //     x="Today it's Sunday";
    //     break;
    //   case 1:
    //     x="Today it's Monday";
    //     break;
    //   case 2:
    //     x="Today it's Tuesday";
    //     break;
    //   case 3:
    //     x="Today it's Wednesday";
    //     break;
    //   case 4:
    //     x="Today it's Thursday";
    //     break;
    //   case 5:
    //     x="Today it's Friday";
    //     break;
//       case 6:
//         x="Today it's Saturday";
//         break;
//     }
//     return x;
//   }
//   Task
//   Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.
  
//   +---------------+-------------+
//   |    month      |    days     |
//   +---------------+-------------+
//   |1,3,5,7,8,10,12|     31      |
//   +---------------+-------------+
//   |4,6,9,11       |     30      |
//   +---------------+-------------+
//   |2              |     28      |  (Do not consider the leap year)
//   +---------------+-------------+

//   Tip: Using default for most of the cases can reduce your work.

// 📌 TESTS
// Test.assertSimilar(howManydays(1),31);
// Test.assertSimilar(howManydays(2),28);
// Test.assertSimilar(howManydays(3),31);
// Test.assertSimilar(howManydays(4),30);
// Test.assertSimilar(howManydays(12),31);

// ✅ SOLUTIONS
// 1 variant

function howManydays(month) {
    var days;
    switch (month) {
        case 1: // January
        case 3: // March
        case 5: // May
        case 7: // July
        case 8: // August
        case 10: // October
        case 12: // December
            days = 31;
            break;
        case 4: // April
        case 6: // June
        case 9: // September
        case 11: // November
            days = 30;
            break;
        case 2: // February
            days = 28;
            break;
        default:
            // This case should never be reached due to the problem constraints
            days = 0; 
            break;
    }
    return days;
}

