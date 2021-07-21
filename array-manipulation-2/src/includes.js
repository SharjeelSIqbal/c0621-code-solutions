/* exported includes */
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    var truthyValue = array[i];
    if (truthyValue === value) {
      return true;
    }
  }
  return false;
}
