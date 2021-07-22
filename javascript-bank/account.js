/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}
Account.prototype.deposit = function (amount) {
  if (amount > 0 && amount % 1 === 0) {
    var depositTrans = new Transaction('deposit', amount);
    this.transactions.push(depositTrans);
    return true;

  } else { return false; }
};

Account.prototype.withdraw = function (amount) {

  if (amount > 0 && amount % 1 === 0) {
    var withdrawTrans = new Transaction('withdrawal', amount);
    this.transactions.push(withdrawTrans);
    return true;
  } else { return false; }
};

Account.prototype.getBalance = function () {
  var deposit = 0;
  var withdrawal = 0;
  if (this.transactions.length === 0) {
    return 0;
  }
  for (var i = 0; i < this.transactions.length; i++) {
    var trans = this.transactions[i];

    if (trans.type === 'deposit') {
      deposit += trans.amount;

    }
    if (trans.type === 'withdrawal') {
      withdrawal += trans.amount;
    }
  }
  return deposit - withdrawal;
};
