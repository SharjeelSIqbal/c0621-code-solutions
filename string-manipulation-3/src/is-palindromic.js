/* exported isPalindromic */
function isPalindromic(string) {
  var reverseString = '';
  var isPalindromic = string.split(' ');
  isPalindromic = isPalindromic.join('');
  for (var i = isPalindromic.length - 1; i >= 0; i--) {
    reverseString += isPalindromic[i];
  }
  if (reverseString === isPalindromic) {
    return true;
  } else { return false; }
}
