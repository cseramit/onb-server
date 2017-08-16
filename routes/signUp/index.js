/**
 * Created by L075728 on 10/08/2017.
 */
var express    = require('express');
var router     = express.Router();
var apiGateway = require('../../middleware/api-gateway');




router.post('/', function(req, resp, next){
    signUpHandler(req, resp, next);
});


var signUpHandler = function(req, resp, next) {
    if(apiGateway.signInValidator(req)) {
        resp.send({'flag': true});
    }else {
        resp.send({'flag': false});
    }

};

module.exports = router;