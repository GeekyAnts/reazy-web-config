'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reazySetupHelper = require('reazy-setup-helper');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  add: function add() {
    (0, _reazySetupHelper.runGenerator)(_path2.default.join(__dirname, '..', 'generators', 'add'), 'reazy-web-config-add');
  },
  remove: function remove() {
    (0, _reazySetupHelper.runGenerator)(_path2.default.join(__dirname, '..', 'generators', 'remove'), 'reazy-web-config-remove');
  }
};