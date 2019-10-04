const Singleton = {
  _firstInstance: null,
  _singleton: {
    stuff: 1
  },
  getInstance: function () {
    if (this._firstInstance === null) {
      this._firstInstance = Object.create(this._singleton)
    }

    return this._firstInstance;
  },
}

const thing1 = Singleton.getInstance();
const thing2 = Singleton.getInstance();
console.log('thing1.stuff :', thing1.stuff);
console.log('thing2.stuff :', thing2.stuff);
thing1.stuff = 2;
console.log('thing1.stuff :', thing1.stuff);
console.log('thing2.stuff :', thing2.stuff);