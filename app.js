const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const flash = require('connect-flash');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require("csurf");


// include variables
const { USERNAME, PASSWORD } = require('./helper/database');

const PORT = 8000;
const app = express();

// mongoDB connection string
const MONGO_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.imqbw.mongodb.net/bootshop?retryWrites=true&w=majority`;

// create mongodb store
const store = new MongoDBStore({
  uri: MONGO_URL,
  collection: 'session'
});
const csrfProtection = csrf();

const User = require("./models/users");
const Product = require("./models/product");

// seed Products
const seedProducts = require('./seedProducts');

// middleware
const mainRoutes = require("./routes/mainRoutes");
const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes');

//Error Page
const errorController = require('./controller/errorController');


app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "static")));
app.use(['/admin/products_edit/', '/product_details/:id', '/admin/'], express.static(path.join(__dirname, 'static')));

app.use(session({ secret: 'secret', resave: false, saveUninitialized: false, cookie: { maxAge: 600000 }, store: store }));

// Connect Flesh
app.use(flash());

app.use(csrfProtection);

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.get('*', (req, res, next) => {
  if (!req.session.user || req.session.user.role === 'admin') {
    req.currentCart = 0;
    req.total = 0;
    return next();
  }
  req.user.populate("cart.items.productId")
    .execPopulate().then(user => {
      const products = user.cart.items;
      req.currentCart = req.user.cart.items;
      req.total = 0;
      if (products.length > 0) {
        req.total = products.map(product => {
          let counter = 0;
          counter += product.productId.price * product.quantity;
          return counter;
        });
        req.total = req.total.reduce((total, counter) => total + counter, 0);
      }
    }).then(result => {
      return next();
    }).catch((err) => console.log(err));

});


app.use(mainRoutes);
app.use(adminRoutes);
app.use(authRoutes);
app.use(errorController.get404);

mongoose
  .connect(
    MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
  ).then(connectionRezult => {
    Product.find().then(product => {
      if (!product.length) {
        seedProducts.createProducts();
      }
      return product;
    });
  })
  .then((result) => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
