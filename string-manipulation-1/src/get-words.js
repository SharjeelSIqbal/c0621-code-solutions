/* exported getWords */
function getWords(string) {
  var words = [];
  var word = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      words.push(word);
      word = '';
      i += 1;
    }
    word += string.charAt(i);

    if (i === string.length - 1) {
      words.push(word);
    }
  }
  return words;
}
