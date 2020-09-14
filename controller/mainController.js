const Product = require('../models/product');

exports.index = (req, res, next) => {
    Product.findAll().then(rows => {
        res.render("pages/index", {
            products: rows,
            pageTitle: 'All products',
            path: '/'
        });
    }).catch(err => console.log(err));
};
exports.faq = (req, res, next) => {
    res.render("pages/faq");
};
exports.contact = (req, res, next) => {
    res.render("pages/contact");
};
exports.delivery = (req, res, next) => {
    res.render("pages/delivery");
};
exports.forgetpass = (req, res, next) => {
    res.render("pages/forgetpass");
};
exports.legal_notice = (req, res, next) => {
    res.render("pages/legal_notice");
};
exports.login = (req, res, next) => {
    res.render("pages/login");
};
exports.product_details = (req, res, next) => {
    res.render("pages/product_details");
};
exports.product_summary = (req, res, next) => {
    res.render("pages/product_summary");
};
exports.products = (req, res, next) => {
    res.render("pages/products");
};
exports.register = (req, res, next) => {
    res.render("pages/register");
};
exports.special_offer = (req, res, next) => {
    res.render("pages/special_offer");
};
exports.tac = (req, res, next) => {
    res.render("pages/tac");
};
