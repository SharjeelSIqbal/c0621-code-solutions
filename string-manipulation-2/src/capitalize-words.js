/* exported capitalizeWords */
function capitalizeWords(string) {
  var words = string.split(' ');

  var capitalized = '';
  for (var i = 0; i < words.length; i++) {

    capitalized += words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
    if (i < words.length - 1) { capitalized += ' '; }
  }
  return capitalized;
}
