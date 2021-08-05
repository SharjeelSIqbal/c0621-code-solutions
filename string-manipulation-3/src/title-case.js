/* exported titleCase */
function titleCase(string) {
  var shortWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  string = string.split(' ');
  for (var i = 0; i < string.length; i++) {

    if (string[i] === 'api') {
      string[i] = string[i].toUpperCase();
    }
    if (string[i].toLowerCase().includes('javascript')) {
      if (string[i].includes(':')) {
        string[i] = 'JavaScript:';
      } else {
        string[i] = 'JavaScript';
      }
    }
    if (!shortWords.includes(string[i]) || string[i] === string[0]) {
      string[i] = string[i][0].toUpperCase() + string[i].substring(1);
    }
    if (string[i].includes(':')) {
      string[i + 1] = string[i + 1][0].toUpperCase() + string[i + 1].substring(1);
    }
    if (string[i].includes('-')) {
      var newString = string[i].split('-');
      newString[1] = newString[1][0].toUpperCase() + newString[1].substring(1);
      newString = newString.join('-');
      string[i] = newString;
    }
  }
  string = string.join(' ');
  return string;
}
