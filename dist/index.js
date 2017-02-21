"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (params) {
  return function (serviceName) {
    var app = this;

    app[serviceName] = params.env;

    return params.env;
  };
};