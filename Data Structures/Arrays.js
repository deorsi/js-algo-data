const codeLang = ['js', 'go', 'c', 'ruby'];

// Variable array is in memory and the cpu knows it.

//push - to put another item in the last index of array
codeLang.push('java'); // input java - O(1)

//pop - to delete the last item in array
codeLang.pop();  // take java out - O(1)
codeLang.pop(); // take ruby out - O(1)


//unshift - to put one item at the beginning of array
codeLang.unshift('asm') // insert asm - O(n)

//splice - to insert at a given index, in this case index[2]
codeLang.splice(2, 0, 'python'); // - O(n)

console.log(codeLang)


// There is two types of arrays: Static and Dynamic

// "Static" is a fixed (in size) array. 
// Used when you know how many items you'd have in the data structure. 

// Dynamic is a flexible (in size) array.
// Used when you don't know for sure how many items you'd have in the data structure, expanding when you add more items.