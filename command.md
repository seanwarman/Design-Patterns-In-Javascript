# Command
[Code](./js/command.js)

**Command** is a little bit like [State](./js/state.js) in that it uses 
different objects to change the functionality of a single interface. 

First we create a "device" object with any number of custom methods 

```js
const Television = {
  _volume: 0,
  on() {
    console.log('TV is on.');
  },
  off() {
    console.log('TV is off.');
  },
  volumeUp() {
    this._volume++;
    console.log(' TV Volume is at ' + this._volume);
  },
  volumeDown() {
    this._volume--;
    console.log(' TV Volume is at ' + this._volume);
  }
}
```


Then we make an "interaction" object to interact with it using a single 
*execute* method. This object is used for turning the Tv on and nothing
else. We'll create a new object like this every time we want different
functionality.

```js
const TurnTvOn = {
  _device: null,
  init(device) {
    this._device = Object.create(device);
  },
  execute() {
    this._device.on();
  }
}
```

Then finally we use one more object to interact with the "device"
via the "interaction" object. This one will be our command interface.

```js
const Commander = {
  _command: null,
  init(command) {
    this._command = Object.create(command);
  },
  press() {
    this._command.execute();
  }
}
```

**Command** allows us to do pretty complex interactions with one or
multiple device objects using a single method (or command). It can also 
be used to easily undo those methods as well.