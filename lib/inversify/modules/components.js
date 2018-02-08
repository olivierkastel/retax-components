'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inversify = require('inversify');

var _actionsCreator = require('../../actionsCreator');

var _annotator = require('../../annotator');

var _api = require('../../api');

var _enhancer = require('../../enhancer');

var _lifecycle = require('../../lifecycle');

var _identifiers = require('../identifiers');

exports.default = new _inversify.KernelModule(function (bind) {
    bind(_identifiers.ANNOTATOR).to(_annotator.Annotator);
    bind(_identifiers.ENHANCER).to(_enhancer.Enhancer);
    bind(_identifiers.API_CONSTRUCTOR).toConstantValue(_api.AbstractApi);
    bind(_identifiers.ACTIONS_CREATOR_CONSTRUCTOR).toConstantValue(_actionsCreator.AbstractActionsCreator);
    bind(_identifiers.LIFECYCLE_MANAGER_CONSTRUCTOR).toConstantValue(_lifecycle.AbstractLifecycleManager);
});
module.exports = exports['default'];
//# sourceMappingURL=components.js.map
