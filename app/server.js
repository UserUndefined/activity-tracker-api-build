"use strict";

var express = require('express'),
    http = require('http'),
    routes = require('./routes');

var app = express();
var port = 80;

//MIDDLEWARE
app.set('port', port);
//app.use(bodyParser.json({ limit: "10kb" }));
//app.use(bodyParser.urlencoded({ limit: "10kb", extended: false }));
//app.use(passport.initialize());
//app.use(helmet.xssFilter());
//app.use(helmet.hidePoweredBy());
//app.use(helmet.ienoopen());
//app.use(helmet.nosniff());
//app.use(helmet.xframe());
//app.use(cors());

//ROUTES
var path = '/';
//var authenticate = passport.authenticate('bearer', {session: false});

app.get(path + 'healthcheck', routes.healthcheck.index);
//app.get(path + 'customer/:id', authenticate, limitRequests(), routes.customer.getCustomerById);
//app.get(path + 'customer/:id', routes.customer.getCustomerById);
//app.delete(path + 'cache', routes.cache.clearCache);

//START
var server = http.createServer(app);
server.listen(app.get('port'), function(){
    //if (config.get("iisnode")) {
    //    logger.info('Express server running on iisnode under: ' + path + '   configured for environment:  ' + config.get('environment'));
    //} else {
    //    logger.info('Express server listening on port ' + app.get('port') + '   configured for environment:  ' + config.get('environment'));
    //}
});


//LISTENERS
var closeServer = function (err) {
    //logger.error('uncaughtException: ' + err);
    process.exit(0);
};

process.on('exit', closeServer);
process.on('SIGINT', closeServer);
process.on('SIGTERM', closeServer);
process.on('uncaughtException', closeServer);


module.exports = app;