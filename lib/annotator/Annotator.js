"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _inversify = require("inversify");

var _metadataKeys = require("./metadataKeys");

var _retaxDi = require("retax-di");

var _inversify2 = require("../inversify");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};

var Annotator = function () {
    function Annotator(_injector, _enhancer) {
        _classCallCheck(this, Annotator);

        this._injector = _injector;
        this._enhancer = _enhancer;
    }

    _createClass(Annotator, [{
        key: "action",
        value: function action() {
            return function (target, key, descriptor) {
                var metadata = Reflect.getMetadata(_metadataKeys.METADATA_KEYS.RETAX_ACTIONS, target) || [];
                metadata.push(key);
                Reflect.defineMetadata(_metadataKeys.METADATA_KEYS.RETAX_ACTIONS, metadata, target);
            };
        }
    }, {
        key: "Api",
        value: function Api() {
            var _this = this;

            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return function (Target) {
                var EnhancedTarget = _this._enhancer.extendApi(Target, config);
                return EnhancedTarget;
            };
        }
    }, {
        key: "ActionsCreator",
        value: function ActionsCreator() {
            var _this2 = this;

            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return function (Target) {
                var _splitEntries2 = _this2._splitEntries(config.apis),
                    apiKeys = _splitEntries2.keys,
                    Apis = _splitEntries2.values;

                var _splitEntries3 = _this2._splitEntries(config.actionsCreators),
                    actionsCreatorsKeys = _splitEntries3.keys,
                    ActionsCreators = _splitEntries3.values;

                var apisServiceId = _this2._injector.registerService(Apis, "Api " + apiKeys.toString());
                var actionsCreatorsServiceId = _this2._injector.registerService(ActionsCreators, "Actions Creator " + actionsCreatorsKeys.toString());
                var EnhancedTarget = _this2._enhancer.extendActionsCreator(Target, {
                    actionsCreators: {
                        keys: actionsCreatorsKeys,
                        serviceId: actionsCreatorsServiceId
                    },
                    apis: {
                        keys: apiKeys,
                        serviceId: apisServiceId
                    }
                });
                return EnhancedTarget;
            };
        }
    }, {
        key: "LifecycleManager",
        value: function LifecycleManager() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.ActionsCreator(config);
        }
    }, {
        key: "RetaxComponent",
        value: function RetaxComponent() {
            var _this3 = this;

            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return function (ComposedComponent) {
                var _splitEntries4 = _this3._splitEntries(config.actionsCreators),
                    actionsCreatorKeys = _splitEntries4.keys,
                    ActionsCreators = _splitEntries4.values;

                var actionsCreatorServiceId = _this3._injector.registerService(ActionsCreators, "Actions Creator " + actionsCreatorKeys.toString());
                return _this3._enhancer.extendComponent(ComposedComponent, {
                    actionsCreators: {
                        keys: actionsCreatorKeys,
                        serviceId: actionsCreatorServiceId
                    }
                });
            };
        }
    }, {
        key: "_splitEntries",
        value: function _splitEntries() {
            var injectableEntries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var entries = Object.entries(injectableEntries);
            var keys = entries.map(function (e) {
                return e[0];
            });
            var values = entries.map(function (e) {
                return e[1];
            });
            return { keys: keys, values: values };
        }
    }]);

    return Annotator;
}();
Annotator = __decorate([(0, _inversify.injectable)(), __param(0, (0, _inversify.inject)(_retaxDi.INJECTOR)), __param(1, (0, _inversify.inject)(_inversify2.ENHANCER)), __metadata('design:paramtypes', [Object, Object])], Annotator);
exports.default = Annotator;
module.exports = exports['default'];
//# sourceMappingURL=Annotator.js.map
