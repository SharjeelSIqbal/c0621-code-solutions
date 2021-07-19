/* exported drop */
function drop(array, count) {
  var newArray = [];

  for (var i = count; i < array.length; i++) {
    var val = array[i];
    if (val || typeof val === 'boolean') {
      newArray.push(array[i]);
    }
  }

  return newArray;
}
