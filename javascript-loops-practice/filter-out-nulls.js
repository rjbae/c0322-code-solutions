/* exported filterOutNulls */
function filterOutNulls(values) {
  var newArray = [];
  for (var i = 0; i < values.length; i++) {
    newArray.push(values[i] - null);
  } return newArray;
}
