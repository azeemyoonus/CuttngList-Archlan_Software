require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var expressHbs =  require('express-handlebars');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var cors= require('cors')
var connection = require('./config/connection')
var indexRouter = require('./routes/index');
var jobcardRouter = require('./routes/jobcard');
var hbs =require('express-handlebars');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// app.engine('hbs', hbs.engine({
//   extname: 'hbs',
//   defaultLayout: 'layout',
//   layoutsDir: __dirname + '/views/',
//   partialsDir: __dirname + '/views/partials'
// }))

// app.set("view engine", "hbs");
// app.set("views", "views");


// app.set('partial', path.join(__dirname, 'views/partials'));
// hbs.registerPartials(__dirname + '/views/partials');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/viewjobcard', jobcardRouter);

connection.dbConnect(() => {
  console.log("successfully connect to db")
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
