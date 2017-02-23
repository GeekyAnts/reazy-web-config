'use strict';

var _yeomanGenerator = require('yeoman-generator');

var _yeomanGenerator2 = _interopRequireDefault(_yeomanGenerator);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _reazySetupHelper = require('reazy-setup-helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _yeomanGenerator2.default.Base.extend({
  constructor: function constructor() {
    _yeomanGenerator2.default.Base.apply(this, arguments);
  },

  initializing: function initializing() {
    // const done = this.async();

    this.pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
    if (!this.pkg || !this.pkg.name) {
      this.log('Please run this command in the root of a Reazy project');
      process.exit(1);
    }

    this.props = {
      name: this.pkg.name || process.cwd().split(_path2.default.sep).pop()
    };
  },

  writing: function writing() {
    (0, _reazySetupHelper.addImport)('reazy-web-config', 'reazyWebConfig');
    (0, _reazySetupHelper.addUse)('app.use(reazyWebConfig({\n  env: require(\'../.env.json\')\n}), \'reazyWebConfig\')');
    (0, _reazySetupHelper.addEnv)('TEST_CONFIG', 'test');
  }
});