/* exported tail */
function tail(array) {
  var newArray = [];
  delete array[0];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  } return newArray;
}

// - Trying to delete the first value of an array and return the rest of the values
//  in a new array.
// - Define a function named tail with one parameter of array.
// - Create a new variable with a value of an empty array.
// - Use the delete keyword to get rid of the first value in the array.
// - Indicate the first value being deleted by putting the index value of 0.
// - Run a for loop with the initial expression being 1 assigned to a variable.
// - Assign 1 to indicate where the loop should begin, which in this case is after
//  the first value.
// - For the condition expression, check to see if the index of the array is less than
//  the length of the array.
// - If the condition is true, then increment the value until there are no more values.
// - Push the values of the new array into the empty array variable and return it.
