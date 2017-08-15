/**
 * Created by L075728 on 10/08/2017.
 */

var requestMapper = require('./request-mapper');
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