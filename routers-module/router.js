var express = require('express');
var router = express.Router();
let controller = require('../controllers/user.controller');
let validates = require('../validates/validates');



router.get('/', controller.index);

router.get('/cookie', function(req, res, next){
    res.cookie('user-id', 1234567);
    res.send('test');
});

router.get('/search', controller.search);

router.get('/create', function(req, res){
    console.log(req.cookies);
    res.render('users/create')
});

router.get('/:id', controller.get)

router.get('/remove/:id', controller.remobeElement)

router.post('/create',validates.validateCreate, controller.Postcreate);



module.exports = router;