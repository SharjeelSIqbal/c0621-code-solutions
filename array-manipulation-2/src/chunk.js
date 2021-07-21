/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  var chunkArray = [];

  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i]);
    if (newArray.length === size || i === array.length - 1) {
      chunkArray.push(newArray);
      newArray = [];
    }
  }
  return chunkArray;
}
