"use strict";

// moodule
const express = require("express");
const app = express();
const PORT = 3000;

// app setting
app.set("views", "./views");
app.set("view engine", "ejs");

// routing
const home = require("./routes/home");
app.use("/", home);       // use()는 미들웨어 등록하는 메서드

module.exports = app;