/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var description = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return description;
}

getDescriptionOfPerson({ name: 'Ada Lovelace', occupation: 'countess', birthPlace: 'London, England' });
