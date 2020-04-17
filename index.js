var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var users = require('./routers-module/router');

const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index', {
        name: 'tienvuv'
    });
});

app.use('/users', users);

app.listen(port, () => {
    console.log(`server listening in port`+ port);
});