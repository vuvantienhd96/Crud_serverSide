let db = require("../db");

let err = [];

module.exports.login = function(req, res, next) {
    res.render('auth/login');
}


module.exports.postLogin = function(req, res) {
    let email = req.body.email;
    let passWord = req.body.password;
     let user = db.get('users').find({email: email}).value();
    if(!user){

        err.push('user is not define !');
        res.render('auth/login', {
            err: err, values: req.body
        });
        return;
    }
    if(user.password !== passWord){
        err.push('pass incorrect !');
        res.render('auth/login', {
            err: err, values: req.body
        });
        return;
    }
    
    res.cookie('userId', user.id, {signed: true});
    res.redirect('/users');
}