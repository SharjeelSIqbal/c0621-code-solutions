/* exported filterOutNulls */
function filterOutNulls(values) {
  var value = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      value.push(values[i]);
    }
  }
  return value;

}
