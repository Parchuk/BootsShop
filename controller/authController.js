const bcrypt = require("bcryptjs");
const User = require("../models/users");
const { loginValidation, registerValidation } = require('../helper/validation');

exports.getLogin = (req, res, next) => {
    if (!req.session.user) {
        return res.render("pages/login", {
            isAuthenticated: false,
            currentCart: req.currentCart,
            total: req.total
        });
    }
    res.redirect('/');
};

exports.postLogin = (req, res, next) => {

    const { error } = loginValidation(req.body);

    const { email, password } = req.body;

    User.findOne({ email: email })
        .then((user) => {
            if (!user) {
                req.flash('error_msg', 'I do not know such email!!!');
                return res.redirect("/login");
            }

            bcrypt.compare(password, user.password).then((match) => {
                if (match) {
                    req.session.isLoggedIn = true;
                    req.session.user = user;
                    return req.session.save((err) => {
                        if (req.session.user.role === 'user') {
                            res.redirect("/");
                        }
                        else {
                            res.redirect("/admin_page");
                        }
                    });
                }
                req.flash('error_msg', 'Password incorrect !!!');
                res.redirect("/login");
            });
        })
        .catch((err) => console.log(err));
};

exports.postLogout = (req, res, next) => {
    req.session.destroy((err) => {
        console.log(err);
        res.redirect("/");
    });
};

exports.getRegister = (req, res, next) => {
    if (!req.session.user) {
        return res.render("pages/register", {
            isAuthenticated: req.session.isLoggedIn,
            currentCart: req.currentCart,
            total: req.total,
            errMessage: []
        });
    }
    res.redirect('/');
};

exports.postRegister = (req, res, next) => {
    const { username, email, password, confirm_password } = req.body;
    let errMessage = [];
    function resRender() {
        return res.render("pages/register", {
            isAuthenticated: req.session.isLoggedIn,
            currentCart: req.currentCart,
            total: req.total,
            errMessage,
            username,
            email,
            password,
            confirm_password
        });
    }
    const { error } = registerValidation(req.body);
    if (!error) {
        User.findOne({ email: email })
            .then((user) => {
                if (user) {
                    errMessage.push('Email already exists!!!');
                    resRender();
                }
                return bcrypt.hash(password, 12);
            })
            .then((hashPassword) => {
                const newUser = new User({
                    name: username,
                    email: email,
                    password: hashPassword,
                    cart: { items: [] },
                });
                return newUser.save();
            })
            .then((result) => {
                req.flash('success_msg', 'You are now registered and can log in');
                return res.redirect("/register");
            })
            .catch((err) => console.log(err));
    }
    else {
        errMessage.push(error.details[0].message);
        return resRender();
    }
};
