var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    app = express(),
    PORT = 8000,
    dotenv = require('dotenv').config()





app.use(express.static(path.resolve('client')))
app.use(express.static(path.resolve('bower_components')))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());


// End Middleware


// set an environment variable called APPROOT to keep track of the root folder of your app
  process.env['APPROOT'] = __dirname;

  //require mongoose configuration, use path.join to build the route
  // require(path.join(process.env['APPROOT'], 'server/config/mongoose.js'));
  //require routes configuration, get a function from the module.exports, that gets invoked while passing it the app
  require(path.join(process.env['APPROOT'], 'server/config/routes.js'))(app);

var server = app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`)
})
