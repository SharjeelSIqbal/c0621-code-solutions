/* exported getValues */
function getValues(object) {
  var property = [];
  var values = [];
  for (var key in object) {
    property.push(key);
  }
  for (var i = 0; i < property.length; i++) {
    values.push(object[property[i]]);
  }
  return values;

}
