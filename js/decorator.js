const PlainPizza = {
  getIngredients() {
    return 'Thin dough';
  },
  getCost() {
    return 4.00;
  }
}

const ToppingDecorator = {
  _newPizza: null,
  init(newPizza) {
    this._newPizza = Object.create(newPizza);
  },
  getIngredients() {
    return this._newPizza.getIngredients();
  },
  getCost() {
    return this._newPizza.getCost();
  }
}

const Mozzarella = {
  _newPizza: null,
  init(newPizza) {
    this._newPizza = Object.create(newPizza);
    console.log('Adding dough');
    console.log('Adding Moz');
  },
  getIngredients() {
    return this._newPizza.getIngredients() + ', Mozzarella';
  },
  getCost() {
    return this._newPizza.getCost() + .50;
  }
}

const TomatoSauce = {
  _newPizza: null,
  init(newPizza) {
    this._newPizza = Object.create(newPizza);
    console.log('Adding dough');
    console.log('Adding Sauce');
  },
  getIngredients() {
    return this._newPizza.getIngredients() + ', Tomato Sauce';
  },
  getCost() {
    return this._newPizza.getCost() + .35;
  }
}

let basicPizza = Object.create(ToppingDecorator);
basicPizza.init(PlainPizza);
mozzarellaPizza = Object.create(Mozzarella);
mozzarellaPizza.init(basicPizza);
tomatoAndMozzarella = Object.create(TomatoSauce);
tomatoAndMozzarella.init(mozzarellaPizza);
console.log(tomatoAndMozzarella.getIngredients());
console.log(tomatoAndMozzarella.getCost());