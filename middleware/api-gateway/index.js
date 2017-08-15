/**
 * Created by L075728 on 11/08/2017.
 */
var signInRequestFormat = require('../request-mappers/sign-in-request-format');
var signUpRequestFormat = require('../request-mappers/sign-up-request-format');

var util = require('../../util');

var routeValidator = function(request) {
    var retValue = true;
    Object.keys(requestMapper).forEach(function(key,index) {
        retValue = retValue && util.exists(request.body, requestMapper[key]);
    });
    return retValue;
};

module.exports = {
    signInValidator: routeValidator
};
