// 🎯 Sum a list but ignore any duplicates

//❓ DESCRIPTIONS
// Please write a function that sums a list, but ignores any duplicated items in the list.

// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.

// ✅ SOLUTIONS
// 1 variant

function sumNoDuplicates(numList) {
    // Шаг 1: Подсчет вхождений каждого элемента
    const countMap = {};
    for (let num of numList) {
        if (countMap[num] === undefined) {
            countMap[num] = 1;
        } else {
            countMap[num]++;
        }
    }

    // Шаг 2: Суммирование элементов, которые появляются ровно один раз
    let sum = 0;
    for (let num of numList) {
        if (countMap[num] === 1) {
            sum += num;
        }
    }

    return sum;
}

// 2 variant
function sumNoDuplicates(arr) {
    let uniqueArr = [];
    let sum = 0;
    arr.forEach(num => {
        if (arr.indexOf(num) === arr.lastIndexOf(num)) {
            uniqueArr.push(num);
            sum += num;
        }
    });
    return sum;
}

// 3 variant
function sumNoDuplicates(numList) {
    return numList.reduce((a,b)=>numList.indexOf(b)===numList.lastIndexOf(b) ? a+b : a,0);
  }

// 4 variant
function sumNoDuplicates(numList) {
    return numList.filter((i)=> numList.indexOf(i) == numList.lastIndexOf(i)).reduce((a,b)=> a + b, 0)
  }
