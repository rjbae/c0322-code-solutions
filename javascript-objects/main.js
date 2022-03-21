var student = {
  firstName: 'Ryan ',
  lastName: 'Bae',
  age: 25
};

var firstName = student.firstName;
var lastName = student.lastName;
var fullName = firstName + lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'student';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Ford ',
  model: 'Mustang',
  year: 1968
};

vehicle.color = 'Yellow ';
vehicle.isConvertible = false;
console.log('value of vehicle.color:', vehicle.color);
console.log('value of vehicle.isConvertible:', vehicle.isConvertible);
console.log(vehicle);

var pet = {
  name: 'Rocky',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet', pet);
