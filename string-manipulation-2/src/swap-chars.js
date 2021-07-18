/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var wordArr = [];
  var word = '';

  for (var i = 0; i < string.length; i++) {
    wordArr.push(string[i]);
  }
  wordArr.splice(firstIndex, 1, string[secondIndex]);
  wordArr.splice(secondIndex, 1, string[firstIndex]);
  for (i = 0; i < wordArr.length; i++) {
    word += wordArr[i];
  }

  return word;
}
