// 03. Numbers
// a. Write a JavaScript function that takes a positive integer as input and returns true if it is a prime number, 
// otherwise returns false.
// -------------------------------------------------------------------------------------------
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= number / 2; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }

  // b. Implement the function to check if a given positive integer is a prime number.
  // -------------------------------------------------------------------------------------------
const number = 13;
const result = isPrime(number);
console.log(result); // Output: true