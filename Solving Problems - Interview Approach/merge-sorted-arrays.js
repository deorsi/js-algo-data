
// 1st with the concat()
console.time('mergeSortedArrays1')
const mergeSortedArrays1 = (arr1, arr2) => {
  let result = [].concat(...arr1, ...arr2);
  return result.sort((a, b) => a - b)
}
mergeSortedArrays1([0, 3, 4, 31], [3, 4, 6, 30]);
console.timeEnd('mergeSortedArrays1');


//2nd  with spread operator ES6
console.time('mergeSortedArrays2')
function mergeSortedArrays2(arr1, arr2) {
  let result = [...arr1, ...arr2];
  return result.sort((arr1, arr2) => arr1 - arr2);
}
mergeSortedArrays2([0, 3, 4, 31], [3, 4, 6, 30]);
console.timeEnd('mergeSortedArrays2');

// both 1st & 2nd are O(n log n) for time & O(n) for space.


// 3rd solution with while loop
console.time('mergeSortedArrays3')
function mergeSortedArrays3(arr1, arr2) {
  //check input
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  while (arr1Item || arr2Item) {
    if (arr2Item === undefined || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }
  return mergedArray;
}

mergeSortedArrays3([0, 3, 4, 31], [3, 4, 6, 30]);
console.timeEnd('mergeSortedArrays3');