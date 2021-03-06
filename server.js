const express = require("express");

const PORT = process.env.PORT || 8081;

const app = express();

// ===== Serve statis content for the app =====
app.use(express.static("public"));

// ===== Parse request body as JSON =====
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// ===== Setting handlebars =====
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// ===== Importing routes and gives server access =====
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("App is listening at localhost: " + PORT);
});
