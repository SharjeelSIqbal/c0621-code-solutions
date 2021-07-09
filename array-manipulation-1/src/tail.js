/* exported tail */
function tail(array) {
  var tails = [];
  for (var i = 1; i < array.length; i++) {
    tails.push(array[i]);
  }
  return tails;
}
