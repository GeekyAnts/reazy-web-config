var generators = require('yeoman-generator');
var fs = require('fs');
var path = require('path');
import { removeImport, removeUse } from 'reazy-setup-helper';

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);
  },

  initializing: function () {
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

  writing: function () {
    removeUse('reazy-web-config');
    removeImport('reazy-web-config');
  }
});
