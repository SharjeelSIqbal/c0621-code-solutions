/* exported capitalizeWord */
function capitalizeWord(word) {
  var capitalized = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      capitalized += word[0].toUpperCase();
    } else if (word.toLowerCase() === 'javascript' && i === 4) {
      capitalized += word[i].toUpperCase();
    } else {
      capitalized += word[i].toLowerCase();
    }

  }
  return capitalized;
}
