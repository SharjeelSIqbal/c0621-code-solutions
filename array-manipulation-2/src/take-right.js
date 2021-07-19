/* exported takeRight */
function takeRight(array, count) {
  var onlyRight = [];

  for (var i = array.length - count; i < array.length; i++) {
    var value = array[i];

    if (value || typeof value === 'boolean') {
      onlyRight.push(value);
    }
  }
  return onlyRight;
}
