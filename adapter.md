# Adapter
[Code](./js/adapter.js)

The adapter allows us to use to incompatible interfaces together.

We have to objects with different but similar methods:

```js
const EnemyTank = {
  fireWeapon() { 
    const attackDamage = randomNumber(10);
    console.log('Enemy tank does ' + attackDamage);
  },
}

const EnemyRobot = {
  smashWithHands() {
    const attackDamage = randomNumber(10);
    console.log('Enemy robot causes ' + attackDamage + ' damage with his hands');
  },
}
```

What if we needed to call `EnemyRobot.smashWithHands()` using the
same interface available on the *EnemyTank* object?

We create an **Adapter** interface that mediates between the two
objects. It has the same methods as the *EnemyTank* but inside 
them it actually calls the *EnemyRobot*'s methods...

```js
const EnemyRobotAdapter = {
  _robot: null,
  init(newRobot) {
    this._robot = newRobot;
  },
  fireWeapon() { 
    this._robot.smashWithHands();
  },
}
```
