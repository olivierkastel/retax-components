var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
import { injectable } from 'inversify';
import 'isomorphic-fetch';
import { HTTP_METHODS } from './httpMethods';
import ApiError from './ApiError';
let AbstractApi = class AbstractApi {
    constructor(_reduxFacade, _configStore) {
        this._reduxFacade = _reduxFacade;
        this._configStore = _configStore;
        const { authHeaderName, baseUrl } = _configStore.config.api;
        this._authHeaderName = authHeaderName;
        this.baseUrl = baseUrl;
    }
    configure(config) {
        this.baseUrl = config.baseUrl || this.baseUrl;
        this.routes = config.routes;
    }
    get(config) {
        return this._abstractMethod(HTTP_METHODS.GET, config);
    }
    post(config) {
        return this._abstractMethod(HTTP_METHODS.POST, config);
    }
    put(config) {
        return this._abstractMethod(HTTP_METHODS.PUT, config);
    }
    delete(config) {
        return this._abstractMethod(HTTP_METHODS.DELETE, config);
    }
    _abstractMethod(method, { url, filters, body, headers }) {
        return __awaiter(this, void 0, Promise, function* () {
            const fullUrl = this._makeFullUrl({ url, filters });
            const fetchConfig = this._makeFetchConfig({ method, body, headers });
            const response = yield fetch(fullUrl, fetchConfig);
            const error = yield this._checkResponse(response);
            if (error)
                throw error;
            return response.json();
        });
    }
    _checkResponse(response) {
        return __awaiter(this, void 0, Promise, function* () {
            let error;
            if (!response.ok) {
                error = new ApiError({
                    status: response.status,
                    statusText: response.statusText,
                    text: yield response.text(),
                });
            }
            return error;
        });
    }
    /**
     * Compute the fetch configuration
     */
    _makeFetchConfig({ method, body, headers } = { method: HTTP_METHODS.GET }) {
        const token = this._reduxFacade.getAuthToken();
        const isJson = typeof body === 'object' && !(body instanceof FormData);
        console.log(`-------isJson: ${isJson}`);
        const bodyToSend = isJson ? JSON.stringify(body) : body;
        console.log(`-------bodyToSend: ${bodyToSend}`);
        const jsonHeader = isJson ? {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        } : undefined;
        const authHeader = token ? {
            [this._authHeaderName]: token,
        } : undefined;
        return {
            body: bodyToSend,
            credentials: 'include',
            headers: Object.assign({}, jsonHeader, headers, authHeader),
            method,
        };
    }
    /**
     * Create the full url on which fetch will make a call.
     */
    _makeFullUrl({ url, filters } = {}) {
        let filter = '';
        if (filters) {
            filter = `?Filter=${JSON.stringify(filters)}`;
        }
        return `${this.baseUrl}${url}${filter}`;
    }
};
AbstractApi = __decorate([
    injectable(), 
    __metadata('design:paramtypes', [Object, Object])
], AbstractApi);
export default AbstractApi;
//# sourceMappingURL=AbstractApi.js.map