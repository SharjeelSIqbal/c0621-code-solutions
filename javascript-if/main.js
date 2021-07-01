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
  } else {
    return false;
  }
}

function isEven(number) {
  if (number % 2 !== 1) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(name) {
  if (name[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age < 21) {
    return false;
  } else if (person.name.valueOf() === 'Dwight Shrute') {
    return 'Bears, beats, Battlestar Galatica ' + false;
  } else {
    return true;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age >= 15) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else if (pH <= 14 && pH > 7) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if (name.valueOf() === 'yakko' || name.valueOf(name) === 'wakko') {
    return 'We\'re the Warner Brothers';
  } else if (name.valueOf() === 'dot') {
    return 'I\'m cute~';
  } else {
    return 'Goodnight everybody';
  }
}
