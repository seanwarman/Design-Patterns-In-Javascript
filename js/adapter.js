function randomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

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

const EnemyRobotAdapter = {
  _robot: null,
  init(newRobot) {
    this._robot = newRobot;
  },
  fireWeapon() { 
    this._robot.smashWithHands();
  },
}

// Create a new instance of each object type.
const enemyTank = Object.create(EnemyTank);
const robotTank = Object.create(EnemyRobot);

// Call the fireWeapon method on enemy tank...
enemyTank.fireWeapon();
try {
  // Obvs we cant call it on the robot as well!
  robotTank.fireWeapon();
} catch (err) {
  console.log('The fireWeapon method doesn\'t exist on robotTank!');
}

// So we use an adapter...
const robotAdapter = Object.create(EnemyRobotAdapter);
robotAdapter.init(robotTank);

// Now we can call the same methods on the robot that we
// use on the normal enemy tank...
robotAdapter.fireWeapon();