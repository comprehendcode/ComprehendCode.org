var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var https = require('https')
var http = require('http')
var helmet = require('helmet');
var multer = require('multer');
var fs = require('fs');

//  Require Passport
var passport = require('passport');

//  Bring in the data model
require('./api/models/database');
//  Bring in the Passport config after model is defined
require('./api/config/passport');
require('dotenv').config();

//  Bring in the routes for the API (delete the default routes)
var authRoutes = require('./api/routes/authRoutes');
var eventRoutes = require("./api/routes/eventRoutes");
var progressRoutes = require("./api/routes/progressRoute");



var app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(cors({
	origin: "*",
    optionsSuccessStatus: 200
}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//  Initialise Passport before using the route middleware
app.use(passport.initialize());

//  Use the API routes when path starts with /api
app.use('/api', authRoutes);
app.use('/api', eventRoutes);
app.use('/api', progressRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

//  Catch unauthorised errors
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401);
        res.json({
            "message": err.name + ": " + err.message
        });
    }
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// LOCAL TESTING
if (process.env.NODE_ENV == "development") {
    app.listen(process.env.NODE_PORT, () => console.log("[√] Epxress local server running!"));
} else {
    http.createServer(app).listen(80, () => {
        console.log('[√] Http is up')
    })

    https.createServer({
        key: fs.readFileSync('/etc/letsencrypt/live/api.comprehendcode.org/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/api.comprehendcode.org/fullchain.pem'),
        ca: fs.readFileSync('/etc/letsencrypt/live/api.comprehendcode.org/fullchain.pem')
    }, app).listen(443, () => {
        console.log('[√] Https is up')
    })
    console.log("Express server running for production");

}


module.exports = app;