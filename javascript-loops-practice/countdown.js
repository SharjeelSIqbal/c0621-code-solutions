/* exported countdown */
function countdown(number) {
  var array = [];
  for (var i = 0; number >= 0; i++) {
    array[i] = number;
    number--;
  }
  return array;
}
