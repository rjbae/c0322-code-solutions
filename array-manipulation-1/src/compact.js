/* exported compact */
function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// - Removing falsy values from each array and assigning the new value into an empty array.
// - Falsy values consist of: false, 0, NaN, null, undefined, ''
// - Define a function named compact with one parameter of array.
// - Create a new variable with the value of an empty array.
// - Run a for loop checking to see if each value is falsy or not.
// - If the value of the array does not contain a falsy value then push it into the
// variable of the empty array.
// - Return the variable.
