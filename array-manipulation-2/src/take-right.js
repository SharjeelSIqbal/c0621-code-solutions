/* exported takeRight */
function takeRight(array, count) {
  var onlyRight = [];
  if (count <= array.length) {
    for (var i = array.length - count; i < array.length; i++) {
      var value = array[i];
      onlyRight.push(value);

    }
  }
  return onlyRight;
}
