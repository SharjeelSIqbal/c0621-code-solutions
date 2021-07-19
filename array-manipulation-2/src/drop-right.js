/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    var value = array[i];
    if (value || typeof value === 'boolean') {
      newArray.push(value);
    }
  }
  return newArray;
}
