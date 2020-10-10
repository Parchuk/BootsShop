const Product = require('../models/product');
//const { products } = require('./mainController');

exports.adminIdex = (req, res, next) => {
    Product.findAll()
        .then((products) => {
            res.render("pages/admin/index", {
                products: products,
                pageTitle: 'All products',
                path: '/',
                currentCart: req.currentCart,
                total: req.total
            });
        })
        .catch(err => console.log(err));
};

exports.adminPage = (req, res, next) => {
    res.render('pages/admin/admin_page', {
        currentCart: req.currentCart
    });
};

exports.adminAddProduct = (req, res, next) => {
    console.log('adminAddProduct');
    res.render("pages/admin/add_product", {
        currentCart: req.currentCart
    });
};

exports.adminAddProductPost = (req, res, next) => {

    const title = req.body.title;
    const price = req.body.price;
    const sale = req.body.sale;
    const imageUrl = req.body.imageURL;
    const quantity = req.body.quantity;
    const color = req.body.color;
    const shortDescription = req.body.shortDescription;
    const fullDescription = req.body.fullDescription;
    const brand = req.body.brand;
    const model = req.body.model;
    const released = req.body.released;
    const dimensions = req.body.dimensions;
    const displaySize = req.body.displaySize;
    const features = req.body.features;
    req.user
        .createProduct({
            title: title,
            price: price,
            sale: sale,
            imageUrl: imageUrl,
            quantity: quantity,
            color: color,
            shortDescription: shortDescription,
            fullDescription: fullDescription,
            brand: brand,
            model: model,
            released: released,
            dimensions: dimensions,
            displaySize: displaySize,
            features: features,
        }).then(result => {
            //console.log('add product result =>',result);
            console.log('product was added');
            res.redirect('/admin/');
        })
        .catch(err => console.log(err));
};

exports.adminProductDelete = (req, res, next) => {
    console.log('Delete Course');
    const id = req.params.id;
    Product.destroy(
        {
            where: {
                id: id
            },
            force: true
        }
    ).then((product) => {
        res.redirect('/admin/');
    })
        .catch((err) => console.log(err));
};

exports.adminProductEdit = (req, res, next) => {
    console.log('adminEditProduct');
    const id = req.params.id;
    Product.findByPk(id)
        .then((product) => {
            res.render('pages/admin/edit_product', {
                product: product,
                id: id,
                currentCart: req.currentCart
                //path:'/products_edit/',
            });
        })
        .catch((err) => console.log(err));
};

exports.adminEditConfirm = (req, res, next) => {
    console.log('EditConfirm');
    const id = req.params.id;
    const title = req.body.title;
    const price = req.body.price;
    const sale = req.body.sale;
    const imageUrl = req.body.imageURL;
    const quantity = req.body.quantity;
    const color = req.body.color;
    const shortDescription = req.body.shortDescription;
    const fullDescription = req.body.fullDescription;
    const brand = req.body.brand;
    const model = req.body.model;
    const released = req.body.released;
    const dimensions = req.body.dimensions;
    const displaySize = req.body.displaySize;
    const features = req.body.features;

    Product.update({
        title: title,
        price: price,
        sale: sale,
        imageUrl: imageUrl,
        quantity: quantity,
        color: color,
        shortDescription: shortDescription,
        fullDescription: fullDescription,
        brand: brand,
        model: model,
        released: released,
        dimensions: dimensions,
        displaySize: displaySize,
        features: features,
    },
        {
            where: {
                id: id
            }
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
            res.render('pages/admin/orders', {
                orders: orders,
                path: '/order',
                currentCart: req.currentCart,
                productsItem,
                total: req.total
            });
        });
};

exports.removeCartProductAdmin = (req, res, next) => {
    const productId = req.body.productId;
    req.user.getOrders().then(orders => {
        currentOrder = orders;
        return orders.map(order => {
            order.getProducts({ where: { id: productId } })
                .then(products => {
                    order.removeProducts(products);
                });
        });
    }).then(result => {
        res.redirect('admin/orders');
    }).catch(err => console.log(err));
};

exports.plusCartProductAdmin = (req, res, next) => {
    const productId = req.body.productId;
    req.user
        .getOrders()
        .then((orders) => {
            return orders.map(order => {
                order.getProducts({ where: { id: productId } }).then(product => {
                    console.log('prod => ', product);
                    return product[0].orderItem.update({ quantity: product[0].orderItem.quantity + 1 });
                    return product;
                });
            });
        }).then(result => {
            res.redirect('/admin/orders');
        })
        .catch(err => console.log(err));
};

exports.minusCartProductAdmin = (req, res, next) => {
    const productId = req.body.productId;
    req.user
        .getOrders()
        .then((orders) => {
            return orders.map(order => {
                order.getProducts({ where: { id: productId } }).then(product => {
                    console.log('prod => ', product);
                    if (product[0].orderItem.quantity > 0) {
                        return product[0].orderItem.update({ quantity: product[0].orderItem.quantity - 1 });
                    }
                    return product;
                });
            });
        }).then(result => {
            res.redirect('/admin/orders');
        })
        .catch(err => console.log(err));
};