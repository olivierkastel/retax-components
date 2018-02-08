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
import { injectable, inject } from 'inversify';
import { METADATA_KEYS } from './metadataKeys';
import { INJECTOR } from 'retax-di';
import { ENHANCER } from '../inversify';
let Annotator = class Annotator {
    constructor(_injector, _enhancer) {
        this._injector = _injector;
        this._enhancer = _enhancer;
    }
    action() {
        return (target, key, descriptor) => {
            const metadata = Reflect.getMetadata(METADATA_KEYS.RETAX_ACTIONS, target) || [];
            metadata.push(key);
            Reflect.defineMetadata(METADATA_KEYS.RETAX_ACTIONS, metadata, target);
        };
    }
    Api(config = {}) {
        return (Target) => {
            const EnhancedTarget = this._enhancer.extendApi(Target, config);
            return EnhancedTarget;
        };
    }
    ActionsCreator(config = {}) {
        return (Target) => {
            const { keys: apiKeys, values: Apis } = this._splitEntries(config.apis);
            const { keys: actionsCreatorsKeys, values: ActionsCreators } = this._splitEntries(config.actionsCreators);
            const apisServiceId = this._injector.registerService(Apis, `Api ${apiKeys.toString()}`);
            const actionsCreatorsServiceId = this._injector.registerService(ActionsCreators, `Actions Creator ${actionsCreatorsKeys.toString()}`);
            const EnhancedTarget = this._enhancer.extendActionsCreator(Target, {
                actionsCreators: {
                    keys: actionsCreatorsKeys,
                    serviceId: actionsCreatorsServiceId,
                },
                apis: {
                    keys: apiKeys,
                    serviceId: apisServiceId,
                },
            });
            return EnhancedTarget;
        };
    }
    LifecycleManager(config = {}) {
        return this.ActionsCreator(config);
    }
    RetaxComponent(config = {}) {
        return (ComposedComponent) => {
            const { keys: actionsCreatorKeys, values: ActionsCreators } = this._splitEntries(config.actionsCreators);
            const actionsCreatorServiceId = this._injector.registerService(ActionsCreators, `Actions Creator ${actionsCreatorKeys.toString()}`);
            return this._enhancer.extendComponent(ComposedComponent, {
                actionsCreators: {
                    keys: actionsCreatorKeys,
                    serviceId: actionsCreatorServiceId,
                },
            });
        };
    }
    _splitEntries(injectableEntries = {}) {
        const entries = Object.entries(injectableEntries);
        const keys = entries.map(e => e[0]);
        const values = entries.map(e => e[1]);
        return { keys, values };
    }
};
Annotator = __decorate([
    injectable(),
    __param(0, inject(INJECTOR)),
    __param(1, inject(ENHANCER)), 
    __metadata('design:paramtypes', [Object, Object])
], Annotator);
export default Annotator;
//# sourceMappingURL=Annotator.js.map