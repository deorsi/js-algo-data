// for the sake of knowledge and getting a little deep
// lets see how we can implement our own Array and its methods using a class.

class OwnArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  deleteAtIndex(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    console.log(this.data[this.length - 1]);
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new OwnArray();

myArray.push('hey, you!');
myArray.push('you!');
myArray.push('!');
myArray.pop();
myArray.push('that is')
myArray.push('very')
myArray.push('nice');
myArray.shiftItems(1);
console.log(myArray);
