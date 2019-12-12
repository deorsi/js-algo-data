
// convert into array with split(), then
// reverse it with reverse(), then 
// // join it back together with join()
function reverse(str) {
  let newStr = str.split("").reverse().join("");
  return newStr;
}

// // or you could create an instance with Array.from() instead of split()
function reverseFrom(str) {
  let newStr = Array.from(str).reverse().join("");
  return newStr;
}


// // using for loops
const reverseLoop = str => {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }
  return newStr;
}

// using recursion
function reverseRec(str) {
  return (str === "") ? '' : reverseRec(str.substr(1)) + str[0];
}

// ES6 new feature using spread operator solve in just one line
const reverseSpread = str => [...str].reverse().join('');
