'use strict';
var jwtDecode = require('jwt-decode');
var url = require('url');
var AccountSummary = require('./AccountSummaryService');

module.exports.getAccountSummary = function getAccountSummary (req, res, next) {
    var decoded = jwtDecode(req.headers.authorization.split(' ')[1]);
    var roles = null;
    if(decoded.user_metadata){
      roles= decoded.user_metadata.roles;
    }
    AccountSummary.getAccountSummary (req.swagger.params, roles, res, next);
};

module.exports.postAccountSummary = function postAccountSummary (req, res, next) {
    AccountSummary.postAccountSummary (req.swagger.params, res, next);
};

module.exports.putAccountSummary = function putAccountSummary (req, res, next) {
    AccountSummary.putAccountSummary (req.swagger.params, res, next);
};

module.exports.patchAccountSummary = function patchAccountSummary (req, res, next) {
    AccountSummary.patchAccountSummary (req.swagger.params, res, next);
};

module.exports.deleteAccountSummary = function deleteAccountSummary (req, res, next) {
    AccountSummary.deleteAccountSummary (req.swagger.params, res, next);
};
