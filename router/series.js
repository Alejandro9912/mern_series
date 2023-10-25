const express = require("express");
const seriesController = require("../controllers/series");
const md_auth = require("../middlewares/authenticate");

const api = express.Router();

api.get("/serie", seriesController.getSeries);
api.post("/serie", [md_auth.asureAuth], seriesController.createSerie);
api.put("/serie/:id", [md_auth.asureAuth], seriesController.updateSerie);
api.delete("/serie/:id", [md_auth.asureAuth], seriesController.deleteSerie);

module.exports = api;
