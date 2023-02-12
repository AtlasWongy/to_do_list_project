const express = require('express');
const connection = require("./connection")
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
module.exports = app;