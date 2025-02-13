// THE CONTEXT
// In the provided code, there's a function named findAverage that calculates the average of numbers in an array.
// The findAverage function takes an array of numbers as a parameter.

// THE PROBLEM
// There's a bug in the implementation of the findAverage function that causes it to produce incorrect results ( it displays NaN)

// YOUR JOB
// Your task is to identify and fix the bug in the findAverage function to ensure that it correctly calculates the average of numbers in the array.

// TIPS
// You should use the DEBUGGER and execute step by step the function iterations.
function findAverage(numbers) {
  let sum = 0;
  // Bug: In the for loop, i must not equal to numbers.lenght (i <= numbers.lenght) because numbers.length equivalent to number of index of the array by 1 which means the output of the function will be NaN
  // Fix solution: remove = operator in i <= numbers.length   
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

let scores = [85, 90, 10, 95, 80];
let averageScore = findAverage(scores);
console.log("Average score:", averageScore);
