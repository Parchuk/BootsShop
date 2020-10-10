const Order = require("../models/order");
const Product = require("../models/product");

exports.index = (req, res, next) => {
    Product.findAll()
        .then((products) => {
            res.render("pages/index", {
                products: products,
                pageTitle: "All products",
                path: 'pages/index',
                currentCart: req.currentCart,
                total: req.total
            });
        })
        .catch(err => console.log(err));
};
exports.faq = (req, res, next) => {
    res.render("pages/faq");
};
exports.contact = (req, res, next) => {
    res.render("pages/contact", {
        currentCart: req.currentCart,
        total: req.total
    });
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
    const id = req.params.id;
    Product.findByPk(id).then(product => {
        res.render("pages/product_details", {
            product: product,
            pageTitle: "Product details",
            currentCart: req.currentCart,
            total: req.total
        });
    }).catch(err => console.log(err));
};
exports.products = (req, res, next) => {
    Product.findAll()
        .then((products) => {
            res.render("pages/products", {
                products: products,
                pageTitle: "All products",
                path: 'pages/products',
                currentCart: req.currentCart,
                total: req.total
            });
        })
        .catch(err => console.log(err));
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

exports.getCart = (req, res, next) => {
    req.user
        .getCart()
        .then((cart) => {
            return cart.getProducts().then((products) => {
                res.render("pages/product_summary", {
                    path: "/product_summary",
                    products: products,
                    currentCart: req.currentCart,
                    total: req.total
                });
            });
        })
        .catch((err) => console.log(err));
};

exports.postCart = (req, res, next) => {
    const productId = req.body.productId;
    let newQuantity = 1;
    let currentCart;
    req.user
        .getCart()
        .then((cart) => {
            currentCart = cart;
            return cart.getProducts({ where: { id: productId } });
        })
        .then(([product]) => {
            if (product) {
                const oldQuantity = product.cartItem.quantity;
                newQuantity = oldQuantity + 1;
                return product;
            }
            return Product.findByPk(productId);
        })
        .then((product) => {
            return currentCart.addProduct(product, {
                through: { quantity: newQuantity },
            });
        })
        .then((result) => {
            res.redirect('/product_summary');
        })
        .catch((err) => console.log(err));
};

exports.getOrders = (req, res, next) => {
    req.user.getOrders({ include: ["products"] })
        .then(orders => {
            let productsItem = [];
            orders.map(order => {
                return order.products.map(product => {
                    if (productsItem.find(item => item.id === product.id)) {
                        productsItem.find(item => {
                            if (item.id === product.id) {
                                return item.orderItem.quantity += product.orderItem.quantity;
                            }
                        });
                    }
                    else {
                        return productsItem.push(product);
                    }
                });
            });
            res.render('pages/orders', {
                orders: orders,
                productsItem,
                path: '/order',
                currentCart: req.currentCart,
                total: req.total
            });
        })
        .catch(err => console.log(err));

};
exports.postOrders = (req, res, next) => {
    let currentCart;
    req.user.getCart().then(cart => {
        currentCart = cart;
        return cart.getProducts();
    }).then(products => {
        return req.user.createOrder()
            .then(order => {
                return order.addProduct(
                    products.map(product => {
                        product.orderItem = { quantity: product.cartItem.quantity };
                        return product;
                    })
                );
            });
    })
        .then(result => {
            return currentCart.setProducts(null);
        })
        .then(result => {
            res.redirect('/orders');
        })
        .catch(err => console.log(err));
};
exports.removeCartProduct = (req, res, next) => {
    const productId = req.body.productId;
    let currentCart;
    req.user
        .getCart()
        .then((cart) => {
            currentCart = cart;
            return cart.getProducts({ where: { id: productId } });
        }).then(product => {
            currentCart.removeProduct(product);
        }).then(result => {
            res.redirect('/product_summary');
        })
        .catch(err => console.log(err));
};

exports.plusCartProduct = (req, res, next) => {
    const productId = req.body.productId;
    req.user
        .getCart()
        .then((cart) => {
            return cart.getProducts({ where: { id: productId } });
        }).then(product => {
            return product[0].cartItem.update({ quantity: product[0].cartItem.quantity + 1 });
        }).then(result => {
            res.redirect('/product_summary');
        })
        .catch(err => console.log(err));
};
exports.minusCartProduct = (req, res, next) => {
    const productId = req.body.productId;
    req.user
        .getCart()
        .then((cart) => {
            return cart.getProducts({ where: { id: productId } });
        }).then(product => {
            if (product[0].cartItem.quantity > 0) {
                return product[0].cartItem.update({ quantity: product[0].cartItem.quantity - 1 });
            }
            return product;
        }).then(result => {
            res.redirect('/product_summary');
        })
        .catch(err => console.log(err));
};