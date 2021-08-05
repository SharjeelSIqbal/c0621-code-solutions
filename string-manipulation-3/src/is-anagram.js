/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var newFirstString = [];
  var newSecondString = [];
  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      newFirstString.push(firstString[i]);
    }
  }
  for (i = 0; i < secondString.length; i++) {
    if (secondString[i] !== ' ') {
      newSecondString.push(secondString[i]);
    }
  }
  newFirstString = newFirstString.sort().join('');
  newSecondString = newSecondString.sort().join('');
  return newFirstString === newSecondString;
}
