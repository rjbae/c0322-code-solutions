/* exported getValues */
function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}

// - Assign an array to the object's property values.
// - Define a function named getValues with one parameter of object.
// - Create a new variable and assign it an empty array.
// - Create a for in statement to obtain the the object properties.
// - Push the property values into the empty array variable by using
// bracket notation.
// Return the new array.
