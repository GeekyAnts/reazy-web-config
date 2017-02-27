import generators from 'yeoman-generator';
import fs from 'fs-extra';
import path from 'path';
import { addEnv, addImport, addUse } from 'reazy-setup-helper';

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
    addImport('reazy-web-config', 'config');
    addUse(`app.use(config({
  env: require('../.env.json')
}), 'config')`);
    addEnv('TEST_CONFIG', 'test');
  }
});
