/* exported capitalize */
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// - Looking to return the string value of word with the first letter uppercased and the
//  rest in lowercase.
// - Capitalize the first letter of the value of word by using the function method of
//  charAt(0) and toUpperCase().
// - The 0 in the function method charAt indicates which index to capitalize at.
// - Lowercase the rest of the letters by using the function method of slice(1) and
//  toLowerCase().
// - The 1 in the function method slice indicates where the start of the lowercasing must
//  begin. In this case it is after the first letter.
