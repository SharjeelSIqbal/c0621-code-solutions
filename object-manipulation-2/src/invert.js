/* exported invert */
function invert(source) {
  var properties = Object.getOwnPropertyNames(source);
  var newObj = {};
  for (var i = 0; i < properties.length; i++) {
    newObj[source[properties[i]]] = properties[i];
  }
  return newObj;
}
