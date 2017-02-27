'use strict';

var _reazySetupHelper = require('reazy-setup-helper');

var generators = require('yeoman-generator');
var fs = require('fs');
var path = require('path');


module.exports = generators.Base.extend({
  constructor: function constructor() {
    generators.Base.apply(this, arguments);
  },

  initializing: function initializing() {
    // const done = this.async();

    this.pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
    if (!this.pkg || !this.pkg.name) {
      this.log('Please run this command in the root of a Reazy project');
      process.exit(1);
    }

    this.props = {
      name: this.pkg.name || process.cwd().split(path.sep).pop()
    };
  },

  writing: function writing() {
    (0, _reazySetupHelper.removeUse)('reazy-web-config');
    (0, _reazySetupHelper.removeImport)('reazy-web-config');
  }
});