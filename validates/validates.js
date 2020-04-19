module.exports.validateCreate = function(req, res, next){
    let err = [];
    if(!req.body.name){
        err.push('name is require !');
    }
    if(!req.body.email){
        err.push('email is require !');
    }
    if(err.length){
        res.render('users/create', {
            err: err,
            values: req.body
        });
        return;
    }
    res.locals.success = true;
    next();
}