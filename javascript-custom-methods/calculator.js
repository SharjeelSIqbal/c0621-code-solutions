/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return Math.pow(x, 2);
  },
  sumAll: function (number) {
    var sumOfAll = 0;
    for (var i = 0; i < number.length; i++) {
      sumOfAll += number[i];
    }
    return sumOfAll;
  },
  getAverage: function (number) {
    var average = 0;
    var counter = 0;
    for (var i = 0; i < number.length; i++) {
      average += number[i];
      counter++;
    }
    average = average / counter;
    return average;
  }
};
