/* exported ransomCase */
function ransomCase(word) {
  var ransom = '';
  for (var i = 0; i < word.length; i++) {
    if (i % 2 === 1) {
      ransom += word[i].toUpperCase();
    } else {
      ransom += word[i].toLowerCase();
    }
  }
  return ransom;
}
