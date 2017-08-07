const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
var models = require('./models');
var routes = require('./routes/index')
var path  = require('path');
var app = express();

app.use(morgan('dev'));

var env = nunjucks.configure('views', {noCache: true});
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '/views')))
// app.use('/', routes); needs to go after body parser
app.use(express.static(path.join(__dirname, '/public')))
app.use(bodyParser.urlencoded({noCache: true}));
app.use('/', routes);
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);
models.User.sync({})
.then(function () {
    return models.Page.sync({})
})
.then(function () {
    // make sure to replace the name below with your express app
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error);



module.exports = app;