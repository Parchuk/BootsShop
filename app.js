const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = 8000;
const app = express();

// include sequalize
const sequalize = require("./helper/database");

// middleware
const mainRoutes = require("./routes/mainRoutes");
//Error Page
const errorController = require('./controller/errorController')


app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "static")));

app.use(mainRoutes);
app.use(errorController.get404)

sequalize
  .sync()
  .then((result) => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));