"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _hoistNonReactStatics = require("hoist-non-react-statics");

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _lodash = require("lodash");

var _ = _interopRequireWildcard(_lodash);

var _inversify = require("inversify");

var _retaxCore = require("retax-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Enhancer = function () {
    function Enhancer() {
        _classCallCheck(this, Enhancer);
    }

    _createClass(Enhancer, [{
        key: "extendApi",
        value: function extendApi(Target, config) {
            var EnhancedApi = function (_Target) {
                _inherits(EnhancedApi, _Target);

                function EnhancedApi(reduxFacade, configStore) {
                    _classCallCheck(this, EnhancedApi);

                    var _this = _possibleConstructorReturn(this, (EnhancedApi.__proto__ || Object.getPrototypeOf(EnhancedApi)).call(this, reduxFacade, configStore));

                    _this.configure(config);
                    return _this;
                }

                return EnhancedApi;
            }(Target);
            EnhancedApi = __decorate([(0, _inversify.injectable)(), __param(0, (0, _inversify.inject)(_retaxCore.REDUX_FACADE)), __param(1, (0, _inversify.inject)(_retaxCore.RETAX_CONFIG_STORE)), __metadata('design:paramtypes', [Object, Object])], EnhancedApi);
            return EnhancedApi;
        }
    }, {
        key: "extendActionsCreator",
        value: function extendActionsCreator(Target, config) {
            var EnhancedActionsCreator = function (_Target2) {
                _inherits(EnhancedActionsCreator, _Target2);

                function EnhancedActionsCreator(apis, actionsCreators) {
                    _classCallCheck(this, EnhancedActionsCreator);

                    var _this2 = _possibleConstructorReturn(this, (EnhancedActionsCreator.__proto__ || Object.getPrototypeOf(EnhancedActionsCreator)).call(this, apis, actionsCreators));

                    _this2.configure({
                        actionsCreators: _.zipObject(config.actionsCreators.keys, actionsCreators),
                        apis: _.zipObject(config.apis.keys, apis)
                    });
                    return _this2;
                }

                return EnhancedActionsCreator;
            }(Target);
            EnhancedActionsCreator = __decorate([(0, _inversify.injectable)(), __param(0, (0, _inversify.multiInject)(config.apis.serviceId)), __param(1, (0, _inversify.multiInject)(config.actionsCreators.serviceId)), __metadata('design:paramtypes', [Array, Array])], EnhancedActionsCreator);
            return EnhancedActionsCreator;
        }
    }, {
        key: "extendComponent",
        value: function extendComponent(ComposedComponent, config) {
            var RetaxComponent = function (_RetaxConsumer) {
                _inherits(RetaxComponent, _RetaxConsumer);

                function RetaxComponent() {
                    _classCallCheck(this, RetaxComponent);

                    return _possibleConstructorReturn(this, (RetaxComponent.__proto__ || Object.getPrototypeOf(RetaxComponent)).apply(this, arguments));
                }

                _createClass(RetaxComponent, [{
                    key: "render",
                    value: function render() {
                        var kernel = this.context.kernel;

                        var services = kernel.getAllServices(config.actionsCreators.serviceId);
                        return React.createElement(ComposedComponent, Object.assign(_.zipObject(config.actionsCreators.keys, services), this.props));
                    }
                }]);

                return RetaxComponent;
            }(_retaxCore.RetaxConsumer);
            RetaxComponent.displayName = "WithServices(" + (ComposedComponent.displayName || 'Nameless') + ")";
            RetaxComponent = __decorate([(0, _inversify.injectable)(), __metadata('design:paramtypes', [])], RetaxComponent);
            // webpack HMR
            if (module && module.hot) {
                var retaxLib = require('retax');
                module.hot.accept();
                retaxLib.retax.reload();
            }
            return (0, _hoistNonReactStatics2.default)(RetaxComponent, ComposedComponent);
        }
    }]);

    return Enhancer;
}();
Enhancer = __decorate([(0, _inversify.injectable)(), __metadata('design:paramtypes', [])], Enhancer);
exports.default = Enhancer;
module.exports = exports['default'];
//# sourceMappingURL=Enhancer.js.map
