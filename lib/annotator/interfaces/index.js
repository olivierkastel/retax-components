'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Annotator = require('./Annotator');

Object.keys(_Annotator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Annotator[key];
    }
  });
});
//# sourceMappingURL=index.js.map
