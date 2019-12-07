var express = require('express');
var router = express.Router();
var XHandler= require('../x-handler/x-handler');
/* GET home page. */

router.get('/', function(req, res, next) {
});

router.post('/',function (req,res,next) {
    // Send request to x-handler
    console.log("asasdasd")
    XHandler.handle(req,res);
});

module.exports = router;
