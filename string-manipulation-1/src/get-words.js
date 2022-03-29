/* exported getWords */
function getWords(string) {
  if (string.length === 0) {
    return [];
  } else if (string.length !== 0) {
    return string.split(' ');
  }
}

// - Trying to separate the words in the string value.
// - Define a function named getWords with one parameter of string.
// - Use a conditional to check if the string contains a value.
// - Create an if statement with the condition checking to see if the length of the
//  string does not contain a value.
// - If it does not contain a value then return an empty string by using the split
//  function method.
// - For the separator put an empty string with no space to return that it is empty.
// - Create an else if statement with the condition checking to if the string contains
//  one or more values.
// - If it does contain one or more values then return an string with the values by using the
//  split function method.
// - For the separator put a string with a space value to indicate where to split the string.
