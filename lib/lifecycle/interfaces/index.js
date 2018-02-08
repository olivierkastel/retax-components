'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AbstractLifecycleManager = require('./AbstractLifecycleManager');

Object.keys(_AbstractLifecycleManager).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _AbstractLifecycleManager[key];
    }
  });
});
//# sourceMappingURL=index.js.map
