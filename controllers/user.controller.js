let db = require('../db');
const shortid = require('shortid');

module.exports.index = function(req, res) {
    res.render('users/index', {
        users: db.get('users').value()
    });
};

module.exports.search = function(req, res) {
    let q= req.query.q;
    let matchedUsers = db.get('users').value().filter(user => {
        return user.name.indexOf(q) !== -1;
    })
    res.render('users/index', {
        users: matchedUsers
    });
};

module.exports.get = function(req, res) {
    let id = req.params.id;
    let user = db.get('users').find({id: id}).value();
    res.render('users/view', {
        user: user
    });
};

module.exports.remobeElement = function(req, res) {
    let id = req.params.id;
    //user.db.get('users').find({id: id}).value();
    let user = db.get('users').remove({id: id}).write();
    res.redirect('/users');
}

module.exports.Postcreate = function(req, res) {
    req.body.id = shortid.generate();
    console.log(req.body);
    db.get('users').push(req.body).write();
    res.redirect('/users');
};

