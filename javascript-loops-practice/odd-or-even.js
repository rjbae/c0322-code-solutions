/* exported oddOrEven */
function oddOrEven(numbers) {
  var newArray = numbers;
  for (var i = 0; i < newArray.length; i++) {
    if (newArray[i] % 2 === 0) {
      newArray[i] = 'even';
    } else if (newArray[i] !== 0) {
      newArray[i] = 'odd';
    }
  }
  return newArray;
}
