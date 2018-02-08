"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _inversify = require("inversify");

var _annotator = require("../annotator");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var AbstractActionsCreator = function () {
    function AbstractActionsCreator() {
        _classCallCheck(this, AbstractActionsCreator);
    }

    _createClass(AbstractActionsCreator, [{
        key: "configure",
        value: function configure(config) {
            this.apis = config.apis;
            this.actionsCreators = config.actionsCreators;
        }
        /**
         * We are loosing typing here. We should find a better solution
         */

    }, {
        key: "export",
        value: function _export() {
            var _this = this;

            var methodNames = Reflect.getMetadata(_annotator.METADATA_KEYS.RETAX_ACTIONS, this) || [];
            return methodNames.reduce(function (res, name) {
                return Object.assign(res, _defineProperty({}, name, _this[name].bind(_this)));
            }, {});
        }
    }]);

    return AbstractActionsCreator;
}();
AbstractActionsCreator = __decorate([(0, _inversify.injectable)(), __metadata('design:paramtypes', [])], AbstractActionsCreator);
exports.default = AbstractActionsCreator;
module.exports = exports['default'];
//# sourceMappingURL=AbstractActionsCreator.js.map
