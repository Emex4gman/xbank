const express = require("express");
const connectDB = require("./config/database");
const morgan = require("morgan");

const app = express();

connectDB();

// Init Middleware

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * Primary routes
 */

module.exports = app;
