/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  var chunkArray = [];
  for (var i = size; i < array.length; i++) {
    for (i = 0; i < size; i++) {
      newArray.push(array[i]);
    } chunkArray.push(newArray);
  }
  return chunkArray;
}
