// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items

//For Example:

//const array1 = ['a', 'b', 'c', 'x']; // Input
//const array2 = ['z', 'y', 'i']; // Input
//should return false. // Output
//-----------
const array1 = ['a', 'b', 'c', 'x']; // Input
const array2 = ['z', 'y', 'a']; // Input
//should return true. // Output

// 2 parameters - arrays - no size limit
// return true or false

// 1st brute attempt - does not need to code, just talk and show you know how to do it right away

const hasCommonItems = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false
}

console.log(hasCommonItems(array1, array2)); // the Bit-O would be O(n^2), not a good solution in terms of scale. Space complexity of O(1).


// 2st attempt

function hasCommonItems2(arr1, arr2) {
  // loop through arr1 and transform items (array) to an properties (obj) //O(1)
  // the code broke if we receive just one parameter, or pass null to the second param,
  // so thats the test or question like: "can we assume always 2 params?"
  let map = {}
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  // loop through arr2 checking if something is common withing the obj //O(n)
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

// the downside to this 2# solution is that the code is that only numbers, strings and booleans can be used correctly in javascript, object properties might not work if we use non literal values like javascript expression, and the code can be more readable.

console.log(hasCommonItems2(array1, array2)); // the Big-O would be O(a+b) for time complexity is faster. O(a) for space complexity is .


// 3rd attempt
// You can tell that you could do a google search to find out if there is a better and more readable solution to like:

const hasCommonItems3 = (arr1, arr2) => arr1.some(item => arr2.includes(item));

console.log(hasCommonItems3(array1, array2)); 
