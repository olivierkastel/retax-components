import { KernelModule } from 'inversify';
import { AbstractActionsCreator } from '../../actionsCreator';
import { Annotator } from '../../annotator';
import { AbstractApi } from '../../api';
import { Enhancer } from '../../enhancer';
import { AbstractLifecycleManager } from '../../lifecycle';
import { ACTIONS_CREATOR_CONSTRUCTOR, ANNOTATOR, API_CONSTRUCTOR, ENHANCER, LIFECYCLE_MANAGER_CONSTRUCTOR } from '../identifiers';
export default new KernelModule((bind) => {
    bind(ANNOTATOR).to(Annotator);
    bind(ENHANCER).to(Enhancer);
    bind(API_CONSTRUCTOR).toConstantValue(AbstractApi);
    bind(ACTIONS_CREATOR_CONSTRUCTOR).toConstantValue(AbstractActionsCreator);
    bind(LIFECYCLE_MANAGER_CONSTRUCTOR).toConstantValue(AbstractLifecycleManager);
});
//# sourceMappingURL=components.js.map