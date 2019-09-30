const Animal = {
    _name: '',
    flyingType: null,
    getName: function() {
        return this._name;
    },
    setName: function(newName) {
        this._name = newName;
    },
    tryToFly: function() {
        return flyingType.fly();
    },
    setFlyingAbility: function(newFlyType) {
        flyingType = newFlyType;
    }
}

const Bird = function(name) {
    let obj = Object.create(Animal);
    obj.setName(name);
    return obj;
}

const Dog = function(name) {
    let obj = Object.create(Animal);
    obj.setName(name);
    return obj;
}

const Flies = {
    ItFlies: function() {
        return 'Flying high';
    },
    CantFly: function() {
        return 'I can\'t fly';
    }
}

