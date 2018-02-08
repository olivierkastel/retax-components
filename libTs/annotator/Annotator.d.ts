import { IAnnotator } from './interfaces';
import { IEnhancer } from '../enhancer';
import { IInjector } from 'retax-di';
import { IApiServiceRuntimeConfig, IActionsCreatorServiceRuntimeConfig, IRetaxComponentRuntimeConfig } from 'retax-core';
export default class Annotator implements IAnnotator {
    private _injector;
    private _enhancer;
    constructor(_injector: IInjector, _enhancer: IEnhancer);
    action(): MethodDecorator;
    Api(config?: IApiServiceRuntimeConfig): ClassDecorator;
    ActionsCreator(config?: IActionsCreatorServiceRuntimeConfig): ClassDecorator;
    LifecycleManager(config?: IActionsCreatorServiceRuntimeConfig): ClassDecorator;
    RetaxComponent(config?: IRetaxComponentRuntimeConfig): ClassDecorator;
    private _splitEntries(injectableEntries?);
}
