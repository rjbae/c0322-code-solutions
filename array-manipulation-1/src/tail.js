/* exported tail */
function tail(array) {
  var newArray = [];
  delete array[0];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  } return newArray;
}
