/* exported getStudentNames */
function getStudentNames(students) {
  var newArray = [];
  for (var prop in students) {
    newArray.push(students[prop]);
  } return newArray;
}
