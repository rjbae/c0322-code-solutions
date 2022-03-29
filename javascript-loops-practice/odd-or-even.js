/* exported oddOrEven */
function oddOrEven(numbers) {
  var newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    var newNum = numbers[i];
    if (newNum % 2 === 0) {
      newNum = 'even';
    } else if (newNum !== 0) {
      newNum = 'odd';
    }
    newArray.push(newNum);
  }
  return newArray;
}
