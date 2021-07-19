/* exported take */
function take(array, count) {
  var newArray = [];

  for (var i = 0; i < count; i++) {
    var val = array[i];
    if (val || typeof val === 'boolean') {
      newArray.push(array[i]);
    }
  }

  return newArray;
}
