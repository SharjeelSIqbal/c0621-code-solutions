/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var string = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return string;
}
