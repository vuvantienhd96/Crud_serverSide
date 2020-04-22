let db = require("../db");
let err = [];
let listProducts = db.get('products').value();
module.exports.productList= function(req, res, next) {

    let page = parseInt(req.query.page) || 1; //n
    let perPage = 8; //x
    let begin = (page - 1)*perPage;
    let end = page*perPage;

    res.render('product/product', {
        products: db.get('products').value().slice(begin, end)
    });
}