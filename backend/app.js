require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const session      = require("express-session");
const MongoStore = require("connect-mongo")(session);


mongoose.Promise = Promise;
mongoose
  .connect(process.env.DB, {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

app.use(require('cors')({
  origin: true,
  credentials: true
}))

app.use(session({
  store: new MongoStore({
    mongooseConnection:mongoose.connection,
    ttl:24*60*60
  }),
  secret: 'lili',
  saveUninitialized: true,
  resave: false,
  cookie : { httpOnly: true, maxAge: 2419200000 },
}));

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));

// Passport initilize
const passport = require('./helpers/passport');
app.use(passport.initialize());
app.use(passport.session());



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';



const auth = require('./routes/auth');
const comments = require('./routes/comments');
const events = require('./routes/events');
const experiences = require('./routes/experiences');
const index = require('./routes/index');
const jobs = require('./routes/jobs');
const ongs = require('./routes/ongs');
const volunteers = require('./routes/volunteers');


app.use('/', auth);
app.use('/', comments);
app.use('/', events);
app.use('/', experiences);
app.use('/', jobs);
app.use('/ong', ongs);
app.use('/', volunteers);
app.use('/', index);


module.exports = app;
