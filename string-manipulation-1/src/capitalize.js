/* exported capitalize */
function capitalize(word) {
  var storage = '';
  for (var i = 0; i < word.length; i++) {

    if (i === 0) {
      storage += word[0].toUpperCase();
    } else {
      storage += word[i].toLowerCase();
    }
  }
  return storage;
}
