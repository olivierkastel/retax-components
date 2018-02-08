import 'isomorphic-fetch';
import { IApi, IMethodConfig } from './interfaces';
import { IReduxFacade, IRetaxConfigStore, IRoutesMap, IApiServiceRuntimeConfig } from 'retax-core';
declare abstract class AbstractApi implements IApi {
    private _reduxFacade;
    private _configStore;
    routes: IRoutesMap;
    baseUrl: string;
    private _authHeaderName;
    constructor(_reduxFacade: IReduxFacade, _configStore: IRetaxConfigStore);
    configure(config: IApiServiceRuntimeConfig): void;
    get<T>(config: IMethodConfig): Promise<T>;
    post<T>(config: IMethodConfig): Promise<T>;
    put<T>(config: IMethodConfig): Promise<T>;
    delete<T>(config: IMethodConfig): Promise<T>;
    private _abstractMethod<T>(method, {url, filters, body, headers});
    private _checkResponse(response);
    /**
     * Compute the fetch configuration
     */
    private _makeFetchConfig({method, body, headers}?);
    /**
     * Create the full url on which fetch will make a call.
     */
    private _makeFullUrl({url, filters}?);
}
export default AbstractApi;
