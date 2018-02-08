import * as React from 'react';
import { IEnhancer, IApiEnhancmentConfig, IActionsCreatorEnhancmentConfig, IComponentEnhancmentConfig } from './interfaces';
import { IApiServiceConstructor, IActionsCreatorServiceConstructor, RetaxConsumer } from 'retax-core';
export default class Enhancer implements IEnhancer {
    extendApi(Target: IApiServiceConstructor, config: IApiEnhancmentConfig): IApiServiceConstructor;
    extendActionsCreator(Target: IActionsCreatorServiceConstructor, config: IActionsCreatorEnhancmentConfig): IActionsCreatorServiceConstructor;
    extendComponent(ComposedComponent: React.ComponentClass<any>, config: IComponentEnhancmentConfig): typeof RetaxConsumer;
}
