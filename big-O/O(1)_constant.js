// O(1) is a constant time algo.
// it does matter how much operations it runs in total, O(1) is a way to say that the operations will remain constant.

const cars = ['ford', 'tesla', 'ferrari', 'jeep', 'truck'];

const useFirstTwoCars = cars => {
  console.log(cars[0]); // O(1)
  console.log(cars[1]); // O(1)
}

useFirstTwoCars(cars); // O(2)

