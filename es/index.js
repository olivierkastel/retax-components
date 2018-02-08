import { retaxKernel } from 'retax';
import { componentsModule, ANNOTATOR } from './inversify';
retaxKernel.load(componentsModule);
export var annotator = retaxKernel.get(ANNOTATOR);
export { AbstractActionsCreator } from './actionsCreator';
export { AbstractApi } from './api';
export { AbstractLifecycleManager } from './lifecycle';
//# sourceMappingURL=index.js.map
