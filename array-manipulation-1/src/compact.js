/* exported compact */
function compact(array) {
  var truthyValues = [];
  for (var i = 0; i < array.length; i++) {
    var val = array[i];
    if (val) {
      truthyValues.push(val);
    }
  }
  return truthyValues;
}
