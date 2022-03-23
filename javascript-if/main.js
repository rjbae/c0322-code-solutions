/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else if (number > 5) {
    return false;
  }
}

function isEven(number) {
  if ((number % 2) === 0) {
    return true;
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else if (string[0] !== 'J') {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else if (person.age < 21) {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else if (person.age < 16) {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age) {
    return false;
  }
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else if (pH > 14 || pH < 0) {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko' && 'wakko') {
    return 'We\'re the warner brothers!';
  } else if (name === 'dot') {
    return 'I\'m cute!';
  } else {
    return 'Goodnight everybody!';
  }
}
