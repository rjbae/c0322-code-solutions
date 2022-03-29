/* exported getKeys */
function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}

// - Obtaining an object's property keys and assigning it to a new array.
// - Define a function named getKeys with one parameter of object.
// - Create a new variable and assign a value of an empty array.
// - Create a for in loop iterate the object's properties.
// - Push the value of object's property which is key to the variable with the empty array.
// - Return the variable.
