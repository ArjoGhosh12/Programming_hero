// question 1:Create an array of numbers. Write a function sumArray that takes the array as an
//argument and returns the sum of all the elements in the array.


const numbersArray = [1, 2, 3, 4, 5];

// Function to calculate the sum of an array
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Call the function with the numbersArray
const result = sumArray(numbersArray);

// Output the result
console.log("Sum of the array:", result);



//Q2:Write a function findMaxNumber that takes an array of numbers as an argument and
//returns the maximum number in the array.
// Function to find the maximum number in an array
function findMaxNumber(arr) {
    if (arr.length === 0) {
      // Return an appropriate value for an empty array
      return undefined;
    }
  
    let maxNumber = arr[0]; // Assume the first element is the maximum
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxNumber) {
        // Update maxNumber if a larger number is found
        maxNumber = arr[i];
      }
    }
  
    return maxNumber;
  }
  
  // Example usage:
  const maxNumber = findMaxNumber(numbersArray);

  // Output the result
  console.log("Maximum number in the array:", maxNumber);
  


  //Q3:Write a function filterOddNumbers that takes an array of numbers as an argument and
    //returns a new array containing only the odd numbers.
    // Function to filter odd numbers from an array
function filterOddNumbers(arr) {
    return arr.filter(number => number % 2 !== 0);//filter method filter the array taking only the odd numbers.
  }
  
  // Example usage:
  const numbersArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const oddNumbersArray = filterOddNumbers(numbersArrays);
  
  // Output the result
  console.log("Array of odd numbers:", oddNumbersArray);




  //Q4:Write a function isPalindrome that takes a string as an argument and returns true if the
   //string is a palindrome (reads the same backward as forward), and false otherwise.
   // Function to check if a string is a palindrome
function isPalindrome(str) {
    const len = str.length;
  
    // Iterate over the first half of the string
    for (let i = 0; i < len / 2; i++) {
      // Compare characters from the beginning and end
      if (str[i] !== str[len - 1 - i]) {
        return false; // If characters don't match, it's not a palindrome
      }
    }
  
    return true; // If the loop completes, the string is a palindrome
  }
  
  // Example usage:
  const testString1 = "radar";
  const testString2 = "hello";
  
  // Output the results
  console.log(`${testString1} is a palindrome: ${isPalindrome(testString1)}`);
  console.log(`${testString2} is a palindrome: ${isPalindrome(testString2)}`);

  
  //Q5Write a function findMissingNumber that takes an array of numbers from 1 to N (where
//  N is the length of the array + 1) with one number missing and returns the missing number
function findMissingNumber(arr) {
    const n = arr.length + 1; // Calculate the expected length of the array
    const totalSum = (n * (n + 1)) / 2; // Calculate the sum of numbers from 1 to N
  
    // Calculate the sum of the elements in the array
    const arraySum = arr.reduce((sum, num) => sum + num, 0);
  
    // The missing number is the difference between the expected sum and the actual sum
    const missingNumber = totalSum - arraySum;
  
    return missingNumber;
  }
  
  // Example usage:
  const numbersArrayss = [1, 2, 4, 5, 6]; // Assume 3 is missing
  const missingNumber = findMissingNumber(numbersArrayss);
  
  // Output the result
  console.log("Missing number:", missingNumber);

  //Q6:Create a function findDuplicates that takes an array as an argument and returns an
 //array containing only the duplicate elements.
 // Function to find duplicate elements in an array
function findDuplicates(arr) 
  {
    const seen = {};
    const duplicates = [];
  
    for (const element of arr)
     {
      if (seen[element])
       {
        duplicates.push(element);
       }
       else
        {
        seen[element] = true;
        }
     }
  
    return duplicates;
  }
  
  // Example usage:
  const arrayWithDuplicates = [1, 2, 3, 2, 4, 5, 4, 6];
  const duplicateElements = findDuplicates(arrayWithDuplicates);
  
  // Output the result
  console.log("Duplicate elements:", duplicateElements);
  
  