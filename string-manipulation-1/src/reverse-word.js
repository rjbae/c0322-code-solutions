/* exported reverseWord */
function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  } return newWord;
}

// - Create a new string with the array value of word in reverse order.
// - Define a function named reverseWord with one parameter of word.
// - Within the function code block, create a new variable with an empty string to take
//  the value of the new word.
// - Create a for loop with the initial expression of the length of the word array - 1
//  in order to access the last letter of the array value and assign it to a new variable i.
// - In the condition expression if i is greated than or equal to the value of 0, the loop
//  will continue to run.
// - Decrement the variable i.
// - In the statement, assign the variable newWord to the value of newWord + word[i].
// - Each time that the loop runs, the letters from the array values of word should be placed
//  in reverse order, due to the fact that we are decrementing the length of word.
// - Return newWord once the loop is finished.
