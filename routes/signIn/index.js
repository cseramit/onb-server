/**
 * Created by L075728 on 10/08/2017.
 */
var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    console.log("Gateway: " + req.url);
    signInHandler(req, res, next);
});

var signInHandler = function(req, resp, next) {

    /* Log the parameters received */
    console.log(req.body.password);
    resp.send({'flag': true});
};

module.exports = router;
