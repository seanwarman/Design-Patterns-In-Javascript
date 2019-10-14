const Animal = {
  _type: null,
  init: function(type) {
    if(this._type) {
      console.log(this._type + ' is already initialised');
      return;
    }
    this._type = type;
  },
  makeCopy() {
    console.log(this._type + ' is made');
    return Object.create(this);
  }
}

const Sheep = Object.create(Animal);
Sheep.init('Sheep');

const Sheep2 = Sheep.makeCopy();
