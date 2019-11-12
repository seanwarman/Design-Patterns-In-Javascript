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

const TurnTvOn = {
  _device: null,
  init(device) {
    this._device = Object.create(device);
  },
  execute() {
    this._device.on();
  },
  undo() {
    this._device.off();
  }
}

const TurnTvOff = {
  _device: null,
  init(device) {
    this._device = Object.create(device);
  },
  execute() {
    this._device.off();
  },
  undo() {
    this._device.on();
  }
}

const TurnTvUp = {
  _device: null,
  init(device) {
    this._device = Object.create(device);
  },
  execute() {
    this._device.volumeUp();
  },
  undo() {
    this._device.volumeDown();
  }
}

const Commander = {
  _command: null,
  init(command) {
    this._command = Object.create(command);
  },
  press() {
    this._command.execute();
  },
  pressUndo() {
    this._command.undo();
  }
}

// Get a new instance of the Television...
const tv = Object.create(Television);

// Create a command object with the command we want to execute...
const onCommand = Object.create(TurnTvOn);
// Then couple it to the device...
onCommand.init(tv);

// Then we create an interface to interact with the command...
let onPressed = Object.create(Commander);
onPressed.init(onCommand);

// Then we interact with it using a generic 'press' method...
onPressed.press();

const offCommand = Object.create(TurnTvOff);
offCommand.init(tv);

onPressed.init(offCommand);
onPressed.press();

const upCommand = Object.create(TurnTvUp);
upCommand.init(tv);

onPressed.init(upCommand);
onPressed.press();
onPressed.press();
onPressed.press();

// We can also make another device with the same method names as Television...
const Radio = {
  _volume: 0,
  on() {
    console.log('Radio is on.');
  },
  off() {
    console.log('Radio is off.');
  },
  volumeUp() {
    this._volume++;
    console.log('Radio Volume is at ' + this._volume);
  },
  volumeDown() {
    this._volume--;
    console.log('Radio Volume is at ' + this._volume);
  }
}

// Then add the capability to control both devices at once...
const TurnItAllOff = {
  _devices: [],
  init(newDevices) {
    this._devices = newDevices;
  },
  execute() {
    this._devices.forEach(device => {
      device.off();
    })
  },
  undo() {
    this._devices.forEach(device => {
      device.on();
    })
  }
}

// Make an array of both devices...
const theTv = Object.create(Television);
const theRadio = Object.create(Radio);
let allDevices = [theTv, theRadio];

// Add them to the new TurnItAllOff functionality object...
const turnAllOff = Object.create(TurnItAllOff);
turnAllOff.init(allDevices);

// And finally add that to our interface
const offButton = Object.create(Commander);
offButton.init(turnAllOff);

// Now the press method turns both devices off at once!
offButton.press();

// To undo commands just add an undo method to every object with an
// execute method and have it do the exact opposite thing that 
// execute does. Then add an pressUndo method to the Commander
// object.
offButton.pressUndo();
