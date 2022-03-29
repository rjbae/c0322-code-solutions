/* exported reverse */
function reverse(array) {
  var newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

// - Creating a new array with all the values of the original array in reverse order.
// - Define a function named compact with one parameter of array.
// - Create a new variable with the value of an empty array.
// - Run a for loop with the initial expression of the length of the array - 1 and assign
// it to a new variable.
// - In order to start the new array with the last value of the array, subtract 1
//  from the length of the array.
// - In the condition expression if the variable is greater than or equal to 0, the loop
//  will continue to run.
// - Decrement the variable in the last expression.
// - In the statement, push the values of the new array and the values of the original array
//  by adding them together.
// - Return the values of the new array.
