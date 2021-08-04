/* exported zip */
function zip(first, second) {
  var newArray = [];
  var fullArray = [];
  for (var i = 0; i < first.length; i++) {
    if (i < first.length && i < second.length) {
      newArray.push(first[i]);
      newArray.push(second[i]);
      fullArray.push(newArray);
      newArray = [];
    }
  }
  return fullArray;
}
