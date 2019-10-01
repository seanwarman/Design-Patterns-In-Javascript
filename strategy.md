# Strategy
[Code](./js/strategy.js)

How to add methods to "sub-classes" that come from the same "super-class".

For example, say I have three animal sub-classes that come from an **Animal** super-class, they are **Dog**, **Cat** and **Bird**. Say I wanted to add a **fly** method to **Bird** but not to the others.

```js
const Bird = function (name) {
  let obj = Object.create(Animal);
  obj.setName(name);
  return obj;
}
```

I could just add **fly** to **Bird** and none of the others but then I would have to duplicate my code every time I wanted to make any other sub-classes that also need the **fly** method (if I made **Bat** for instance).

So we make new objects for each variation of the flying ability.

```js
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
```

This is called decoupling. It means to take the behaviour between the animals that varies (in this case flying) and isolate it away from the Animal super-class.