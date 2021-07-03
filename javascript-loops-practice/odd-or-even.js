/* exported oddOrEven */
function oddOrEven(number) {
  var oddsAndEvens = [];
  for (var i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
      oddsAndEvens.push('even');
    } else {
      oddsAndEvens.push('odd');
    }
  }
  return oddsAndEvens;
}
