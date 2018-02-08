var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
import { injectable } from 'inversify';
import 'isomorphic-fetch';
import { HTTP_METHODS } from './httpMethods';
import ApiError from './ApiError';
var AbstractApi = function () {
    function AbstractApi(_reduxFacade, _configStore) {
        _classCallCheck(this, AbstractApi);

        this._reduxFacade = _reduxFacade;
        this._configStore = _configStore;
        var _configStore$config$a = _configStore.config.api,
            authHeaderName = _configStore$config$a.authHeaderName,
            baseUrl = _configStore$config$a.baseUrl;

        this._authHeaderName = authHeaderName;
        this.baseUrl = baseUrl;
    }

    _createClass(AbstractApi, [{
        key: "configure",
        value: function configure(config) {
            this.baseUrl = config.baseUrl || this.baseUrl;
            this.routes = config.routes;
        }
    }, {
        key: "get",
        value: function get(config) {
            return this._abstractMethod(HTTP_METHODS.GET, config);
        }
    }, {
        key: "post",
        value: function post(config) {
            return this._abstractMethod(HTTP_METHODS.POST, config);
        }
    }, {
        key: "put",
        value: function put(config) {
            return this._abstractMethod(HTTP_METHODS.PUT, config);
        }
    }, {
        key: "delete",
        value: function _delete(config) {
            return this._abstractMethod(HTTP_METHODS.DELETE, config);
        }
    }, {
        key: "_abstractMethod",
        value: function _abstractMethod(method, _ref) {
            var url = _ref.url,
                filters = _ref.filters,
                body = _ref.body,
                headers = _ref.headers;

            return __awaiter(this, void 0, Promise, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var fullUrl, fetchConfig, response, error;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                fullUrl = this._makeFullUrl({ url: url, filters: filters });
                                fetchConfig = this._makeFetchConfig({ method: method, body: body, headers: headers });
                                _context.next = 4;
                                return fetch(fullUrl, fetchConfig);

                            case 4:
                                response = _context.sent;
                                _context.next = 7;
                                return this._checkResponse(response);

                            case 7:
                                error = _context.sent;

                                if (!error) {
                                    _context.next = 10;
                                    break;
                                }

                                throw error;

                            case 10:
                                return _context.abrupt("return", response.json());

                            case 11:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "_checkResponse",
        value: function _checkResponse(response) {
            return __awaiter(this, void 0, Promise, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var error;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                error = void 0;

                                if (response.ok) {
                                    _context2.next = 10;
                                    break;
                                }

                                _context2.t0 = ApiError;
                                _context2.t1 = response.status;
                                _context2.t2 = response.statusText;
                                _context2.next = 7;
                                return response.text();

                            case 7:
                                _context2.t3 = _context2.sent;
                                _context2.t4 = {
                                    status: _context2.t1,
                                    statusText: _context2.t2,
                                    text: _context2.t3
                                };
                                error = new _context2.t0(_context2.t4);

                            case 10:
                                return _context2.abrupt("return", error);

                            case 11:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
        /**
         * Compute the fetch configuration
         */

    }, {
        key: "_makeFetchConfig",
        value: function _makeFetchConfig() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { method: HTTP_METHODS.GET },
                method = _ref2.method,
                body = _ref2.body,
                headers = _ref2.headers;

            var token = this._reduxFacade.getAuthToken();
            var isJson = (typeof body === "undefined" ? "undefined" : _typeof(body)) === 'object' && !(body instanceof FormData);
            console.log("-------isJson: " + isJson);
            var bodyToSend = isJson ? JSON.stringify(body) : body;
            console.log("-------bodyToSend: " + bodyToSend);
            var jsonHeader = isJson ? {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            } : undefined;
            var authHeader = token ? _defineProperty({}, this._authHeaderName, token) : undefined;
            return {
                body: bodyToSend,
                credentials: 'include',
                headers: Object.assign({}, jsonHeader, headers, authHeader),
                method: method
            };
        }
        /**
         * Create the full url on which fetch will make a call.
         */

    }, {
        key: "_makeFullUrl",
        value: function _makeFullUrl() {
            var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                url = _ref4.url,
                filters = _ref4.filters;

            var filter = '';
            if (filters) {
                filter = "?Filter=" + JSON.stringify(filters);
            }
            return "" + this.baseUrl + url + filter;
        }
    }]);

    return AbstractApi;
}();
AbstractApi = __decorate([injectable(), __metadata('design:paramtypes', [Object, Object])], AbstractApi);
export default AbstractApi;
//# sourceMappingURL=AbstractApi.js.map
