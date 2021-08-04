/* exported equal */
function equal(first, second) {
  for (var i = 0; i < second.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
