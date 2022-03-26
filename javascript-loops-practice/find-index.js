/* exported findIndex */
function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    } else if (i + 1 === array.length) {
      return -1;
    }
  }
}
