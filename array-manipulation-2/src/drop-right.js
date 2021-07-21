/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    var value = array[i];
    newArray.push(value);
  }
  return newArray;
}
