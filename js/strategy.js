// This is the animal's "super-class"
const Animal = {
  _name: '',
  flyingType: null,
  getName: function () {
    return this._name;
  },
  setName: function (newName) {
    this._name = newName;
  },
  tryToFly: function () {
    if(!this.flyingType) {
      console.log('Please set a flying type for ' + this._name);
    } else {
      return this.flyingType.fly();
    }
  },
  setFlyingAbility: function (newFlyType) {
    this.flyingType = newFlyType;
  }
}

// These are the animal "sub-classes"
const Bird = function (name) {
  let obj = Object.create(Animal);
  obj.setName(name);
  return obj;
}
const Dog = function (name) {
  let obj = Object.create(Animal);
  obj.setName(name);
  return obj;
}

// We must create a different flying object for every type of flying that an
// animal object might have.
const ItFlys = {
  fly: function() {
    console.log('Flying high');
  }
};
const CantFly = {
  fly: function() {
    console.log('I can\'t fly');
  }
};

// We don't actually touch the super-class directly, instead we let the
// sub-classes handle that. 
const sparky = Dog('sparky');
sparky.tryToFly();
sparky.setFlyingAbility(Object.create(CantFly));
sparky.tryToFly();

const tweety = Bird('tweety');
tweety.tryToFly();
tweety.setFlyingAbility(Object.create(ItFlys));
tweety.tryToFly();