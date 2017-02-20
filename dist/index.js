'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (params) {
  return function (serviceName) {
    var app = this;

    // const env = require(params.envPath);
    console.log('env', params.env);

    app[serviceName] = params.env;

    return params.env;
  };
};