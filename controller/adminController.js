const Product = require('../models/product');
//const { products } = require('./mainController');
const Order = require("../models/order");


exports.adminIdex = (req, res, next) => {
    Product.find()
        .then((products) => {
            res.render("pages/admin/index", {
                products: products,
                pageTitle: 'All products',
                path: '/',
                currentCart: 0,
                total: 0,
                isAuthenticated: req.session.isLoggedIn,
                user: req.user
            });
        })
        .catch(err => console.log(err));
};

exports.adminPage = (req, res, next) => {
    res.render('pages/admin/admin_page', {
        currentCart: 0,
        isAuthenticated: req.session.isLoggedIn,
        user: req.session.user
    });
};

exports.adminAddProduct = (req, res, next) => {
    console.log('adminAddProduct');
    res.render("pages/admin/add_product", {
        currentCart: 0,
        isAuthenticated: req.session.isLoggedIn,
        user: req.user
    });
};

exports.adminAddProductPost = (req, res, next) => {
    console.log('User Id =>', req.session.user);
    const { title, price, sale, imageURL, quantity, color, shortDescription, fullDescription, brand, model, released, dimensions, displaySize, features } = req.body;

    const product = new Product({
        title,
        price,
        sale,
        imageUrl: imageURL,
        quantity,
        color,
        shortDescription,
        fullDescription,
        brand,
        model,
        released,
        dimensions,
        displaySize,
        features,
        userId: req.session.user
    });
    product.save().then(result => {
        console.log('product was added');
        res.redirect('/admin/');
    })
        .catch(err => console.log(err));
};

exports.adminProductDelete = (req, res, next) => {
    console.log('Delete Course');
    const _id = req.params.id;
    Product.findOneAndDelete({ _id }).then((product) => {
        res.redirect('/admin/');
    })
        .catch((err) => console.log(err));
};

exports.adminProductEdit = (req, res, next) => {
    console.log('adminEditProduct');
    const prodId = req.params.productId;
    Product.findById(prodId)
        .then((product) => {
            res.render('pages/admin/edit_product', {
                product: product,
                currentCart: 0,
                isAuthenticated: req.session.isLoggedIn,
                user: req.user
            });
        })
        .catch((err) => console.log(err));
};

exports.adminEditConfirm = (req, res, next) => {
    const prodId = req.params.productId;
    const { title, price, sale, imageURL, quantity, color, shortDescription, fullDescription, brand, model, released, dimensions, displaySize, features } = req.body;

    Product.findByIdAndUpdate(prodId, {
        title,
        price,
        sale,
        imageUrl: imageURL,
        quantity,
        color,
        shortDescription,
        fullDescription,
        brand,
        model,
        released,
        dimensions,
        displaySize,
        features,
        userId: req.session.user
    }
    ).then(result => {
        //console.log('add product result =>',result);
        console.log('product updated');
        res.redirect('/admin/');
    })
        .catch(err => console.log(err));
};

exports.adminProductDetails = (req, res, next) => {
    console.log('adminProductDetails');
    //res.render("pages/contact")
};

exports.adminProductList = (req, res, next) => {
    console.log('adminProductList');
    //res.render("pages/contact")
};

exports.getOrders = (req, res, next) => {

    Order.find()
        .then((orders) => {
            // console.log('orders => ', orders.id);
            res.render('pages/admin/orders', {
                orders,
                path: '/order',
                currentCart: 0,
                total: 0,
                isAuthenticated: req.session.isLoggedIn,
                user: req.user
            });
        });
};

exports.removeOrder = (req, res, next) => {
    const orderId = req.body.orderId;
    Order.findOneAndDelete(orderId).then(result => {
        res.redirect('admin/orders');
    });
};

exports.removeOrderItem = (req, res, next) => {
    const productId = req.body.productId;
    const orderId = req.body.orderId;
    Order.find({ _id: orderId }).then(order => {

        if (order[0].products.length > 1) {
            let newProductArr = order[0].products.filter(product => product.id.toString() !== productId.toString());

            Order.findOneAndUpdate({ _id: orderId }, { products: newProductArr }).then(result => {
                res.redirect('admin/orders');
            });
        }
        else {
            Order.findOneAndDelete(orderId).then(result => {
                res.redirect('admin/orders');
            });
        }
    });
};

exports.plusItemOrder = (req, res, next) => {
    const productId = req.body.productId;
    const orderId = req.body.orderId;
    Order.find({ _id: orderId }).then(order => {
        let newQuantity = order[0].products.filter(product => {
            if (product.id.toString() === productId.toString()) {
                return product.quantity = product.quantity + 1;
            }
            return product;
        });
        console.log('newQan', newQuantity);
        Order.findOneAndUpdate({ _id: orderId }, { products: newQuantity }).then(result => {
            res.redirect('admin/orders');
        });
    });
};

exports.minusItemOrder = (req, res, next) => {
    const productId = req.body.productId;
    const orderId = req.body.orderId;
    Order.find({ _id: orderId }).then(order => {
        let newQuantity = order[0].products.filter(product => {
            if (product.id.toString() === productId.toString() && product.quantity > 1) {
                return product.quantity = product.quantity - 1;
            }
            return product;
        });
        console.log('newQan', newQuantity);
        Order.findOneAndUpdate({ _id: orderId }, { products: newQuantity }).then(result => {
            res.redirect('admin/orders');
        });
    });
};