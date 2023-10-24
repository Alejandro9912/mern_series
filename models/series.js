const mongoose = require("mongoose");

const seriesShema = mongoose.Schema({
  nombre: String,
  fechaLanzamiento: Date,
  director: String,
  temporadas: Number,
  cantidadEpisodios: Number,
  active: Boolean,
});

module.exports = mongoose.model("Series", seriesShema);
