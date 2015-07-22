#!/bin/env node
// imports vecrawl
var debug = require('debug')('VeCrawl'),
    express = require('express'),
    http = http = require('http'),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    exphbs = require('express-handlebars'),
    methodOverride = require('method-override'),

    session = require('express-session'),
    passport = require('passport'),
    flash = require('connect-flash'),
    
    favicon = require('serve-favicon'),
    lessMiddleware = require('less-middleware'),
    nconf = require('nconf'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    UserModel,
    SearchModel,
    LanguageModel,
    db = mongoose.connection;

var release = true;
	
/**
* DATABASE
* -------------------------------------------------------------------------------------------------
* initialize database connection
**/
// init config file access
nconf.argv().env().file({ file: 'dbconfig.json' });

// connect to database
mongoose.connect(
    "mongodb://" + nconf.get('MONGOLAB_USERNAME') 
    + ":" + nconf.get('MONGOLAB_PASSWORD') 
    + "@" + process.env.OPENSHIFT_MONGODB_DB_HOST
    + ":" + process.env.OPENSHIFT_MONGODB_DB_PORT
    + "/" + nconf.get('MONGOLAB_DB')
);
db.on('success', function () {
    console.log("Connected to database");
});
db.on('error', console.error.bind(console, 'Connection error:'));
// initialize model
db.once('open', function (db) {
    console.log("Initializing database schema");
    var Search = new Schema({
        id: mongoose.Schema.ObjectId,
        url_list: Array
    });
    var Language = new Schema({
        langId: mongoose.Schema.ObjectId,
        key: String,
        value: String,
    });
    
    console.log("Initializing model");
    SearchModel = mongoose.model('Search', Search);
    LanguageModel = mongoose.model('Language', Language);
});


/**
* PASSPORT
* -------------------------------------------------------------------------------------------------
* use user authentification passwort
**/
require('./config/passport')(passport); // pass passport for configuration


/**
* EXPRESS
* -------------------------------------------------------------------------------------------------
* initialize express web framework
**/
var app = express();
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('ipaddress', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

// set global variables
app.locals.urlRoot = 'http://vecrawl-xpitfire.rhcloud.com';
app.locals.title = 'VeCrawl';
app.locals.author = 'Dinu Marius-Constantin';
app.locals.copyright = '2015 VeCrawl';
app.locals.user = '';
app.locals.pageInfo = {
    title: app.locals.title,
    author: app.locals.author,
    copyright: app.locals.copyright
};

// view engine setup
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/images/favicon.ico'));
if (!release)
    app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(methodOverride('X-HTTP-Method-Override'));

// set static paths
app.use(lessMiddleware(__dirname + 'public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'public/images')));
app.use('/js', express.static(path.join(__dirname, 'public/javascripts')));
app.use('/css', express.static(path.join(__dirname, 'public/stylesheets')));


/**
* SESSION
* -------------------------------------------------------------------------------------------------
* initialize express session
**/
// required for passport
app.use(session({
    secret: 'ahellofasecretthatikeepformyself',
    saveUninitialized: false,
    resave: false,
	cookie: {
        maxAge: 1000*60*60
    }
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


/**
* ROUTING
* -------------------------------------------------------------------------------------------------
* include a route file for each major area of functionality in the site
**/
require('./routes/api')(app, db);
require('./routes/auth')(app, passport); // load our routes and pass in our app and fully configured passport
require('./routes/default')(app);
require('./routes/error')(app);

// create server instance
var server = http.createServer(app);


/**
* RUN
* -------------------------------------------------------------------------------------------------
* this starts up the server on the given port
**/

server.listen(app.get('port'), app.get('ipaddress'), function () {
    console.log("Express server listening on port: " + app.get('port') + ", ipaddress: " + app.get('ipaddress'));
});


module.exports = app;