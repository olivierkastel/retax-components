export default class ApiError extends Error {
    constructor({ status, statusText, text, }) {
        super(statusText);
        this.status = status;
        this.statusText = statusText;
        this.responseText = text;
    }
}
//# sourceMappingURL=ApiError.js.map