// Class:
// Here we can define the methods and properties shared by all the orcs
const Orc = {
    _name: '',
    _amtDamage: 0,
    setDamage: function(damage) {
        this._amtDamage = damage;
    },
    getDamage: function(){
        return this._amtDamage;
    },
    setName: function(name) {
        this._name = name;
    },
    getName: function() {
        return this._name;
    },
    followHero: function() {
        console.log(this.getName() + ' is following the Hero.');
    },
    displayOrc: function() {
        console.log(this.getName() + ' is on the screen.');
    },
    orcAttacks: function() {
        console.log(this.getName() + ' attacks and does ' + this.getDamage() + ' to the Hero.');
    },
};

// Subclasses:
// Here's where we can solidify exactly what type of orc we want to create.
const BigOrc = function() {
    let NewORc = Object.create(Orc);
    NewORc.setName('The Gurk');
    NewORc.setDamage(90);
    return NewORc;
}
const SquatOrc = function() {
    let NewORc = Object.create(Orc);
    NewORc.setName('Podgeface');
    NewORc.setDamage(30);
    return NewORc;
}

// Interface:
// This is where all the interaction logic can go.
// We could build another factory interface that, for example, chooses an orc
// at random.
function OrcFactory(orcType) {
    if(orcType === 'A') {
        return BigOrc()
    } else 
    if(orcType === 'B') {
        return SquatOrc();
    }
    return null;
}

// Here's how we might use it...
let randomOrc = OrcFactory('A');
randomOrc.orcAttacks();