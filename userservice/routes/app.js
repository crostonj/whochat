var express = require('express');
var appRouter = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


var router = function() {

    //middleware
    appRouter.use(function(req, res, next) {
        console.log('Time: ', Date.now());
        next();
    });

    appRouter.get('/', function(req, res, next) {
        res.send('hello');
    });

    return appRouter;

};

module.exports = router;