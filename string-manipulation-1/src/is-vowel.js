/* exported isVowel */
function isVowel(char) {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true;
  } else if (char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
    return true;
  } else {
    return false;
  }
}

// - Checking to see if the value of char is a vowel.
// - Capitalized vowels must be included.
// - Define a function named isVowel with the parameter of char.
// - char containes a string value of one letter.
// - Need to create a boolean to check if char is a vowel or not.
// - Create an if statement with the first condition checking to see if the value of char
//  is strictly equal to a string value of a lowercase vowel.
// - Return the boolean value of true.
// - Create an else if statement to check if the value of char is strictly eqaul to a string
//  value of a uppercase vowel.
// - Return the boolean value of true.
// - Create an else statement with the return value of false if the first two conidtionals
// do not prove to be true.
