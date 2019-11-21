# Facade
[Code](./js/facade.js)

How to implement logic that is obscured from the user's interface, or
behind the scenes.

Facade is an object that integrates many interfaces in order to make
their combined use simpler.

Say we had a bank account system with many different objects handling
the functionality of a user's account. There might be an object to
check the user's security code, another one to check their account
number, another to check their funds etc.

We can create a **Facade** to pull in all these complex objects into
one simple interface by having parameters for each one then accessing
them from within.

```js
const BankAccountFacade = {
  _accountNumber: 0,
  _securityCode: 0,
  _acctChecker: null,
  _codeChecker: null,
  _fundChecker: null,

  init(accountNum, securityCode) {
    console.log('Welcome to ABC Bank');
    this._accountNumber = accountNum;
    this._securityCode = securityCode;

    this._acctChecker = Object.create(AccountNumberCheck);
    this._codeChecker = Object.create(SecurityCodeCheck);
    this._fundChecker = Object.create(FundsCheck);
  },
  // ...
}
```

Once we initialise the *BankAccountFacade* we can make more generalised
methods for the detailed functionality that the external objects 
provide.

```js
// ...
const BankAccountFacade = {
  withdrawCash(cashToGet) {
    if(
      this._acctChecker.accountActive(this.getAccountNumber()) &&
      this._codeChecker.accountActive(this.getSecurityCode()) &&
      this._fundChecker.haveEnoughMoney(cashToGet)
    ) {
      this._fundChecker.withdrawCash(cashToGet);
      console.log('Transaction Complete! \n');
    } else {
      console.log('Transaction Failed\n');
    }
  },
  // ...
}
```