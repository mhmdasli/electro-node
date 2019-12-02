var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var port = process.env.PORT || 3000;


var app = express();
var http = require('http').Server(app);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
indexRoute = require('./routes/index');
app.use('/', indexRoute);


http.listen(port, function () {
    console.log('listening on *:' + port);
});

