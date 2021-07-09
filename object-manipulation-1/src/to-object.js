/* exported toObject */
function toObject(keyValuePair) {
  var pair = {};
  pair[keyValuePair[0]] = keyValuePair[1];
  return pair;
}
