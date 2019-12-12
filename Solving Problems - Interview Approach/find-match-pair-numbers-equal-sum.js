
// Google Interview Example
// Receive a collection of numbers
// find a match (pair of numbers) equal to a given sum

// Inputs:
let nums1 = [1, 2, 3, 9];
let nums2 = [1, 2, 4, 4];

let sum = 8

// Output
// nums1 & sum = False;
// nums2 & sum = True


// Naive | Brute
function hasPairWithSum(arr, sum) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum)
        return true;
    }
  }
  return false;
}

console.log(hasPairWithSum(nums1, sum)); // The Big-O would be O(n^2).

// Better
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

console.log(hasPairWithSum2(nums2, sum)); // The Big-O would be O(n)

