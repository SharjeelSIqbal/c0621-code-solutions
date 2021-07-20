/* exported lastChars */
function lastChars(length, string) {
  var lastChar = '';
  var stringIndex = string.length;
  for (var i = 0; i < length; i++) {
    if (string.charAt(stringIndex - i) === ' ') {
      length += 1;
      continue;
    }
    lastChar += string.charAt(stringIndex - length + i);
  }
  return lastChar;
}
