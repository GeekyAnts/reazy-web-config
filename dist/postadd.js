'use strict';

var _yeomanEnvironment = require('yeoman-environment');

var _yeomanEnvironment2 = _interopRequireDefault(_yeomanEnvironment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = _yeomanEnvironment2.default.createEnv();

env.register(__dirname + '/generators/add', 'reazy-web-config-add');

env.run('reazy-web-config-add', { disableNotifyUpdate: true });