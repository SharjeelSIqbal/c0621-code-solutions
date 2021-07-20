/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && balance % 1 === 0) {
    var account = new Account(this.nextAccountNumber, holder);
    this.accounts.push(account);
    account.deposit(balance);
    this.nextAccountNumber += 1;
    return account.number;
  }
  return null;
};

Bank.prototype.getAccount = function (number) {
  var account = this.accounts[number];
  if (!this.accounts.includes(account)) {
    return null;
  }
  var newAccount = new Account(account.number, account.holder);

  return newAccount;
  //   if (this.accounts.includes[number]) {
  //   return this.account[number];
  // }
};
