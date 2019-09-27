# State
[Code](../js/state.js)

How to have have an object's functions do different things depending on the objects internal state.
This pattern allows us to use a single interface that has multiple functionality without using any
`if` statements.

It works by creating multiple *state* objects that all have identical functions inside them. Using
the example of an ATM Machine, two of our states might look like:

```js
const NocardState = {
    insertCard: () => {},
    removeCard: () => {}
}

const HasCardState = {
    insertCard: () => {},
    removeCard: () => {}
}
```

We then define a function that allows the internal state object functions to change the state they're
in, depending on what they want to do, this is a bit like how you use `setState()` in React.

```js
function setAtmState(newState) {
    atmMachine = newState
}
```

Now we can work with the state objects with the knowledge that if I'm writing the functionality of 
`HasCardState.removeCard()` I can act as if the card is in the ATM Machine. So I'll probably want to
write whatever logic I need to actually remove the card then change the state to `NoCardState`.

```js
const HasCardState = {
    removeCard: () => {
        console.log('Removing card...');
        // some stuff to actually remove it, then...
        setAtmState(Object.create(NoCardState));
    }
}
```