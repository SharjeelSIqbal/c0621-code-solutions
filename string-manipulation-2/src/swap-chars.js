/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var StringArr = [];
  var word = '';

  for (var i = 0; i < string.length; i++) {
    StringArr.push(string[i]);
  }
  StringArr.splice(firstIndex, 1, string[secondIndex]);
  StringArr.splice(secondIndex, 1, string[firstIndex]);
  for (i = 0; i < StringArr.length; i++) {
    word += StringArr[i];
  }

  return word;
}
