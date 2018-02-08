'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Annotator = require('./Annotator');

Object.defineProperty(exports, 'Annotator', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Annotator).default;
  }
});

var _interfaces = require('./interfaces');

Object.keys(_interfaces).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _interfaces[key];
    }
  });
});

var _metadataKeys = require('./metadataKeys');

Object.keys(_metadataKeys).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _metadataKeys[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map
