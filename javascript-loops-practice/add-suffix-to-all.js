/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newArray = [];
  var ending = suffix;
  for (var i = 0; i < words.length; i++) {
    newArray.push(words[i] + ending);
  }
  return newArray;
}
