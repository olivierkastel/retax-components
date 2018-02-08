function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ApiError = function (_Error) {
    _inherits(ApiError, _Error);

    function ApiError(_ref) {
        var status = _ref.status,
            statusText = _ref.statusText,
            text = _ref.text;

        _classCallCheck(this, ApiError);

        var _this = _possibleConstructorReturn(this, (ApiError.__proto__ || Object.getPrototypeOf(ApiError)).call(this, statusText));

        _this.status = status;
        _this.statusText = statusText;
        _this.responseText = text;
        return _this;
    }

    return ApiError;
}(Error);

export default ApiError;
//# sourceMappingURL=ApiError.js.map
