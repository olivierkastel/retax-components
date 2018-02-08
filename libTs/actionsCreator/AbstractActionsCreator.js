var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { injectable } from 'inversify';
import { METADATA_KEYS } from '../annotator';
let AbstractActionsCreator = class AbstractActionsCreator {
    configure(config) {
        this.apis = config.apis;
        this.actionsCreators = config.actionsCreators;
    }
    /**
     * We are loosing typing here. We should find a better solution
     */
    export() {
        const methodNames = Reflect.getMetadata(METADATA_KEYS.RETAX_ACTIONS, this) || [];
        return methodNames.reduce((res, name) => (Object.assign(res, { [name]: this[name].bind(this) })), {});
    }
};
AbstractActionsCreator = __decorate([
    injectable(), 
    __metadata('design:paramtypes', [])
], AbstractActionsCreator);
export default AbstractActionsCreator;
//# sourceMappingURL=AbstractActionsCreator.js.map