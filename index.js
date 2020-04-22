
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
require('dotenv').config();

let users = require('./routers-module/router');
let auth = require('./routers-module/auth.router');
let products = require('./routers-module/product.router');
let authMiddleware = require('./middlewares/auth.middleware');

const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(cookieParser(process.env.SESSION_SECRET));

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

app.use('/users', authMiddleware.requireAuth, users);
app.use('/auth', auth);
app.use('/products', products);


app.listen(port, () => {
    console.log(`server listening in port`+ port);
});