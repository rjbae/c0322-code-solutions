/* exported toObject */
function toObject(keyValuePair) {
  var value = '';
  var key = '';
  var obj = {};
  for (var i = 0; i < keyValuePair.length; i++) {
    if (i === 0) {
      key = keyValuePair[0];
    } else {
      value = keyValuePair[1];
    } obj[key] = value;
  } return obj;
}

// - Store the key value pair into an array.
// - Define a function named toObject with a parameter of keyValuePair.
// - Create a new variable of value and assign it an empty string to pass in the
// property value.
// - Create a new variable of key and assign it an empty string to pass in the
// property name.
// - Create a new varible and assign it a value of an empty object.
// - Run a for loop with the initial expression of a variable with the value of 0.
// - If the variable is less than the length of keyValuePair then the loop will continue
// to run.
// - Increment the variable until there are no more values to be found.
// - Create a conditional if statement.
// - If the variable from the for loop is strictly equal to 0 then assign the variable
// key to the keyValuePair's first index, which is 0.
// - Create another conditional statement to assign the variable of value to keyValuePair's
// second index, which is 1.
// - Assign key to the empty obj by using bracket notation and assign it to the value.
// - Return object.
