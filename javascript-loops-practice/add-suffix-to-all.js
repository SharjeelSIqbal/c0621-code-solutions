/* exported addSuffixToAll */
function addSuffixToAll(word, suffix) {
  var words = [];
  for (var i = 0; i < word.length; i++) {

    words.push(word[i] + suffix);

  }
  return words;
}
