"use strict";
exports.__esModule = true;
var express_1 = require("express");
var morgan_1 = require("morgan");
var cors_1 = require("cors");
var routes_1 = require("./routes");
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
app.use((0, cors_1["default"])());
app.use((0, morgan_1["default"])("dev"));
app.get("/", function (req, res) {
    res.send("Welcome to the backend for Darling-Pretty-Photography");
});
app.use(routes_1["default"]);
app.listen(8080, function () {
    console.log("Server started on port 8080");
});
exports["default"] = app;
