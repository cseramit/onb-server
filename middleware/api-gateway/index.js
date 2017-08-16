/**
 * Created by L075728 on 11/08/2017.
 */
var requestFormats = require('./validation-schema.json');


var util = require('../../util');



var routeValidator = function(req, resp, next) {

    var requestType = req.url;
    var reqFormat = requestFormats.requests[requestType];
    var retValue = true;


    /*Object.keys(reqFormat).forEach(function(key,index) {
        retValue = retValue && util.exists(request.body, requestMapper[key]);
    });

    console.log(retValue);*/
    next();
};

module.exports = routeValidator;
