var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    app = express(),
    PORT = 8000,
    dotenv = require('dotenv').config(),
    compression = require('compression');




app.use(express.static(path.resolve('client')))
app.use(express.static(path.resolve('bower_components')))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(compression());

// End Middleware


  process.env['APPROOT'] = __dirname;


  require(path.join(process.env['APPROOT'], 'server/config/routes.js'))(app);

var server = app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`)
})
