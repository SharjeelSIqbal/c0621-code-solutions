/* exported includesSeven */
function includesSeven(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] === 7) {
      return true;
    }
  }
  return false;
}
