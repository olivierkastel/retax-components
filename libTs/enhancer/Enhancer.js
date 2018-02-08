var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import * as React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import * as _ from 'lodash';
import { inject, multiInject, injectable } from 'inversify';
import { RetaxConsumer, RETAX_CONFIG_STORE, REDUX_FACADE } from 'retax-core';
let Enhancer = class Enhancer {
    extendApi(Target, config) {
        let EnhancedApi = class EnhancedApi extends Target {
            constructor(reduxFacade, configStore) {
                super(reduxFacade, configStore);
                this.configure(config);
            }
        };
        EnhancedApi = __decorate([
            injectable(),
            __param(0, inject(REDUX_FACADE)),
            __param(1, inject(RETAX_CONFIG_STORE)), 
            __metadata('design:paramtypes', [Object, Object])
        ], EnhancedApi);
        return EnhancedApi;
    }
    extendActionsCreator(Target, config) {
        let EnhancedActionsCreator = class EnhancedActionsCreator extends Target {
            constructor(apis, actionsCreators) {
                super(apis, actionsCreators);
                this.configure({
                    actionsCreators: _.zipObject(config.actionsCreators.keys, actionsCreators),
                    apis: _.zipObject(config.apis.keys, apis),
                });
            }
        };
        EnhancedActionsCreator = __decorate([
            injectable(),
            __param(0, multiInject(config.apis.serviceId)),
            __param(1, multiInject(config.actionsCreators.serviceId)), 
            __metadata('design:paramtypes', [Array, Array])
        ], EnhancedActionsCreator);
        return EnhancedActionsCreator;
    }
    extendComponent(ComposedComponent, config) {
        let RetaxComponent = class RetaxComponent extends RetaxConsumer {
            render() {
                const { kernel } = this.context;
                const services = kernel.getAllServices(config.actionsCreators.serviceId);
                return React.createElement(ComposedComponent, Object.assign(_.zipObject(config.actionsCreators.keys, services), this.props));
            }
        };
        RetaxComponent.displayName = `WithServices(${ComposedComponent.displayName || 'Nameless'})`;
        RetaxComponent = __decorate([
            injectable(), 
            __metadata('design:paramtypes', [])
        ], RetaxComponent);
        // webpack HMR
        if (module && module.hot) {
            const retaxLib = require('retax');
            module.hot.accept();
            retaxLib.retax.reload();
        }
        return hoistNonReactStatic(RetaxComponent, ComposedComponent);
    }
};
Enhancer = __decorate([
    injectable(), 
    __metadata('design:paramtypes', [])
], Enhancer);
export default Enhancer;
//# sourceMappingURL=Enhancer.js.map