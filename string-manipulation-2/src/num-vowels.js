/* exported numVowels */
function numVowels(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelNumber = 0;
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (string[i].toLowerCase() === vowels[j]) {

        vowelNumber++;
      }
    }
  }
  return vowelNumber;
}
