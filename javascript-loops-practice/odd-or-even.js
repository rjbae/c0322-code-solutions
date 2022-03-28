/* exported oddOrEven */
function oddOrEven(numbers) {
  var newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = 'even';
    } else if (numbers[i] !== 0) {
      numbers[i] = 'odd';
    }
    newArray.push(numbers[i]);
  }
  return newArray;
}
