/* exported initial */
function initial(array) {
  var notLast = [];
  for (var i = 0; i < array.length - 1; i++) {
    notLast.push(array[i]);
  }
  return notLast;
}
