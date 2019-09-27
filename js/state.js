// Defining the states for an ATM Machine. 
const NoCard = {
  insertCard: function() {
    console.log('Inserting a card...');
    setAtmState(Object.create(HasCard));
  },
  removeCard: function() {
    console.log('No card to remove.');
  }
};

const HasCard = {
  message: 'Card already inserted',
  insertCard: function() {
    console.log(this.message);
    this.message = 'Please remove card';
  },
  removeCard: function() {
    console.log('Removing card...');
    setAtmState(Object.create(NoCard));
  }
};

// The function each state can use to transfer the
// atmMachine object, our interface, to a different state.
function setAtmState(newState) {
  atmMachine = newState;
}

// Start the atmMachine in the NoCard state. 
let atmMachine = Object.create(NoCard);

// Each function will do something different depending on
// the internal state of atmMachine.
atmMachine.insertCard();
atmMachine.insertCard();
atmMachine.insertCard();
atmMachine.insertCard();
atmMachine.removeCard();
atmMachine.insertCard();
atmMachine.insertCard();