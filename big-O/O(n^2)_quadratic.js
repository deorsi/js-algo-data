// O(n^2) is quadratic time - whenever you have a nested for you'll have a O(n^2).

// Example - log pair of arrays
const cats = ['smelly', 'stinky', 'chubby', 'funny'];

const pairCats = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) { //nested loop
      console.log(arr[i], arr[j])
    }
  }
}

pairCats(cats) // O(n^2)

