function convertMinutesToSeconds(minutes) {
  var convert = minutes * 60;
  return convert;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(10);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  var string = 'Hello ' + name;
  return string;
}

var greeting = greet('Ryan');
console.log('Greet function result:', greeting);

function getArea(width, height) {
  var getAreaResult = width * height;
  return getAreaResult;
}

var area = getArea(10, 5);
console.log('Area of rectangle:', area);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var firstName = getFirstName({ firstName: 'Ryan', lastName: 'Bae' });
console.log('getFirstNameResult:', firstName);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}

var lastElement = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementResult:', lastElement);
