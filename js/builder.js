const Robot = {
  _robotHead: '',
  _robotTorso: '',
  _robotArms: '',
  _robotLegs: '',
  setRobotHead: function (head) {
    this._robotHead = head;
  },
  getRobotHead: function () {
    return this._robotHead;
  },
  setRobotTorso: function (torso) {
    this._robotTorso = torso;
  },
  getRobotTorso: function () {
    return this._robotTorso;
  },
  setRobotArms: function (arms) {
    this._robotArms = arms;
  },
  getRobotArms: function () {
    return this._robotArms;
  },
  setRobotLegs: function (legs) {
    this._robotLegs = legs;
  },
  getRobotLegs: function () {
    return this._robotLegs;
  },
};

const OldRobotBuilder = {
  _robot: {},
  init: function () {
    // In most languages this would be the constructor, which we don't have
    // for Object.create so instead a common pattern is to call it init()
    this._robot = Object.create(Robot);
  },

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
  getRobot: function () {
    return this._robot;
  }
};

const RobotEngineer = {
  _robotBuilder: {},
  init: function (robotBuilder) {
    this._robotBuilder = robotBuilder
  },
  getRobot: function () {
    return this._robotBuilder.getRobot()
  },
  makeRobot: function () {
    this._robotBuilder.init();
    this._robotBuilder.buildRobotHead();
    this._robotBuilder.buildRobotTorso();
    this._robotBuilder.buildRobotArms();
    this._robotBuilder.buildRobotLegs();
  }
};

const oldStyleRobot = Object.create(OldRobotBuilder);
const robotEngineer = Object.create(RobotEngineer);
robotEngineer.init(oldStyleRobot);
robotEngineer.makeRobot();
const firstRobot = robotEngineer.getRobot();
console.log('firstRobot.getRobotHead() :', firstRobot.getRobotHead());