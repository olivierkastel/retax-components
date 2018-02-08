'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AbstractLifecycleManager = exports.AbstractApi = exports.AbstractActionsCreator = exports.annotator = undefined;

var _actionsCreator = require('./actionsCreator');

Object.defineProperty(exports, 'AbstractActionsCreator', {
  enumerable: true,
  get: function get() {
    return _actionsCreator.AbstractActionsCreator;
  }
});

var _api = require('./api');

Object.defineProperty(exports, 'AbstractApi', {
  enumerable: true,
  get: function get() {
    return _api.AbstractApi;
  }
});

var _lifecycle = require('./lifecycle');

Object.defineProperty(exports, 'AbstractLifecycleManager', {
  enumerable: true,
  get: function get() {
    return _lifecycle.AbstractLifecycleManager;
  }
});

var _retax = require('retax');

var _inversify = require('./inversify');

_retax.retaxKernel.load(_inversify.componentsModule);
var annotator = exports.annotator = _retax.retaxKernel.get(_inversify.ANNOTATOR);
//# sourceMappingURL=index.js.map
