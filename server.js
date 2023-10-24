const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { API_Version } = require("./constants");

const app = express();

// Import routines

const authRoutes = require('./router/auth')
const userRoutes = require('./router/user')
const seriesRoutes = require('./router/series')

// Configure Body Parser

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Configure static folder

app.use(express.static("uploads"));

// Configure Header HTTP -CORS

app.use(cors());

// Configure routings

app.use(`/api/${API_Version}`, authRoutes)
app.use(`/api/${API_Version}`, userRoutes)
app.use(`/api/${API_Version}`, seriesRoutes)

module.exports = app;
