import { IActionsCreator, IExportReturn } from './interfaces';
import { IActionsCreatorServiceConfig, IUserServiceMap } from 'retax-core';
declare abstract class AbstractActionsCreator implements IActionsCreator {
    apis: IUserServiceMap;
    actionsCreators: IUserServiceMap;
    configure(config: IActionsCreatorServiceConfig): void;
    /**
     * We are loosing typing here. We should find a better solution
     */
    export(): IExportReturn;
}
export default AbstractActionsCreator;
