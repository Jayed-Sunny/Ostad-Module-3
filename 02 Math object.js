// 02. Math Object
// a. Write a JavaScript function that takes an array of numbers as input and returns the 
// square root of the sum of squares of all the numbers. Use the Math object to perform the 
// necessary calculations.
// ------------------------------------------------------------------------------------------
function squareRootSumOfSquares(numbers) {
    let sumOfSquares = 0;
    
    for (let i = 0; i < numbers.length; i++) {
      sumOfSquares += Math.pow(numbers[i], 2);
    }
    
    const squareRoot = Math.sqrt(sumOfSquares);
    return squareRoot;
  }

// b. Implement the function to display the square root of the sum of squares for an array of numbers.
// ----------------------------------------------------------------------------------------------------
const numbers = [3, 4, 5];
const result = squareRootSumOfSquares(numbers);
console.log(result); // Output: 7.0710678118654755

