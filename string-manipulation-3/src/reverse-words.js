/* exported reverseWords */
function reverseWords(string) {
  var wordArr = [];
  string = string.split(' ');
  for (var i = 0; i < string.length; i++) {
    var newWords = '';
    for (var j = string[i].length - 1; j >= 0; j--) {
      newWords += string[i][j];

      if (newWords.length === string[i].length) {
        wordArr.push(newWords);
      }
    }
  }
  return wordArr.join(' ');
}
