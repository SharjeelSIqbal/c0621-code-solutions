function convertsMinutesToSeconds(minutes) {
  return 60 * minutes;
}
console.log(convertsMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name;
}
console.log(greet('Beavis'));

function getArea(width, height) {
  return width * height;
}
console.log(getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}
console.log(getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  return array[array.length - 1];
}
console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));
