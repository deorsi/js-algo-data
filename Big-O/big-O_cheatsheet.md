# Cheat Sheet - big-O

# Big O's

O(n) is linear - used for loops or while loops through n items;
O(1) is constant - with no loops;
O(log N) is logarithmic - usually searching algorithms have log n when sorted (binary search);
O(n log(n)) is log linear - used for sorting operations;
O(n^2) is quadratic - used when every element in a collection needs to be compared to other element (two nested loops);
O(2^n) is exponential - recursive algorithms that solves a problem of size n;
O(n!) is factorial - used when adding nested loops for every element.

Obs: Iteration over half a collection still O(n);

# Rules to calculate for Big-O

1) Look for the worst case scenario;
2) Remove constants;
3) Different terms for input should have different values.
   Two different collections should be:
   - O(a + b) if at the same order, step by step;
   - O(a * b) if they're nested steps;
4) Drop non dominants.
   - if there others O's, you should consider the dominant one.

# Things that takes time in a function

- Operations (+, -, *, /)
- Comparisons (<, >, ==)
- Looping (for, while)
- Outside Function call (function())

# Things that causes space complexity

- Variables
- Data Structures
- Function Call
- Allocations

# Links to help:
- https://www.bigocheatsheet.com/
- https://stackoverflow.com/questions/487258/what-is-a-plain-english-explanation-of-big-o-notation

