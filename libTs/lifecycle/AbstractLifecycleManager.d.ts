import { ILifecycleManager } from './interfaces';
import { IActionsCreatorServiceConfig, IUserServiceMap } from 'retax-core';
import { IAction } from 'retax-utils';
declare abstract class AbstractLifecycleManager implements ILifecycleManager {
    apis: IUserServiceMap;
    actionsCreators: IUserServiceMap;
    configure(config: IActionsCreatorServiceConfig): void;
    abstract willResolveRoute(): IAction<any, any>;
}
export default AbstractLifecycleManager;
