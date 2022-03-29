/* exported setValue */
function setValue(object, key, value) {
  var values = (object[key] = value);
  return values;
}

// - Set the values of an object by pushing in the key and value.
// - Define a function named setValue with 3 parameters of object, key, and value.
// - Create a new variable and assign the value of the object property by using bracket notation
// and assign it to the value.
// - Return the new variable.
