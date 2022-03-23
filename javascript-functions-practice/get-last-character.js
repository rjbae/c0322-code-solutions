/* exported getLastCharacter */
function getLastCharacter(string) {
  var lastString = string.length - 1;
  var lastCharacter = string[lastString];
  return lastCharacter;
}

getLastCharacter('foo');
