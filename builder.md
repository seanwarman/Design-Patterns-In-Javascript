# Builder
A **Builder** is a blueprint for creating objects that have the same properties but different values.

A *Robot* builder would need an object to initially hold the properties similar to all robot types. We know all robots will have a head, torso, arms and legs.

```js
const Robot = {
  _robotHead: '',
  _robotTorso: '',
  _robotArms: '',
  _robotLegs: '',
  // then a lot of getters and setters for these properties
};
```

Then we make the blueprint that specifies all the values that will be assigned to those properties if that blueprint is used. This is the part we call the **Builder**. We can have any number of different **Builder**s for the **Robot** object. 

```js
const OldRobotBuilder = {
  // ...
  buildRobotHead: function () {
    this._robot.setRobotHead('Tin Head');
  },
  buildRobotTorso: function () {
    this._robot.setRobotTorso('Tin Torso');
  },
  buildRobotArms: function () {
    this._robot.setRobotArms('Blowtorch Arms');
  },
  buildRobotLegs: function () {
    this._robot.setRobotLegs('Roller Skates');
  },
  // ...
};
```

Now we create an *engineer* that's resposible for putting all the pieces together. Like the *Robot* object, the *RobotEngineer* will be unique.

```js
const RobotEngineer = {
  // ...
  makeRobot: function () {
    this._robotBuilder.init();
    this._robotBuilder.buildRobotHead();
    this._robotBuilder.buildRobotTorso();
    this._robotBuilder.buildRobotArms();
    this._robotBuilder.buildRobotLegs();
  }
  // ...
};
```

All three of these objects are responsible for there own roles when creating the new *Robot*. We can specify a different **Builder** object for any different type of *Robot* we want to make.
