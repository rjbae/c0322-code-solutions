/* exported initial */
function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// - Trying to delete the last value of an array and return the rest of the value in
//  a new array.
// - Define a function named initial with one parameter of array.
// - Create a new variable with the value of an empty array.
// - Run a for loop with the initial expression of a new variable with the value of 0.
// - 0 indicates where the loop is going to begin within the array, which in this case
//  is the first value.
// - For the condition expression check to see if the index of the array is less than the
//  the last index of the array.
// - Subtracting 1 from the length of the array gets rid of the last value of the array.
// - If the condition expression runs true, increment the value by 1.
// - After the loop is finished, push the new values of the array into the variable with
//  the empty array.
// - Return the value of the new array.
