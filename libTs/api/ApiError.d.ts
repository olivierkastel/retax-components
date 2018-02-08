import { IHttpError, IHttpErrorConstructor } from './interfaces';
export default class ApiError extends Error implements IHttpError {
    status: number;
    statusText: string;
    responseText: string;
    constructor({status, statusText, text}: IHttpErrorConstructor);
}
