/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var value = array[i];
    if (i < size) {
      if (value || typeof value === 'boolean') {
        newArray.push(value);
      }
    }
  }
  return newArray;
}
