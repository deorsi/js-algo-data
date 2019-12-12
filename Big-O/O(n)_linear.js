// O(n) means that your code will run in Linear Time. 
// The number of operations increase in linear way.

// Example

const shun = ['shun']; // O(1)
const cavaleiros = ['ikki', 'seiya', 'hyoga', 'shiryu', 'shaka', 'dohko', 'shura', 'mu', 'aldebaran', 'shun'] // O(10)
const people = new Array(100000).fill('shun') //O(100000)

function findShun(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'shun') {
      console.log("Ikkiiiiiiiiiiii!");
      break;
    }
  }
}

findShun(cavaleiros);

// In this case, as the number of people to search for Shun increases more operations will be needed. They grow linear, side by side.