const mongoose = require("mongoose");

const seriesSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  fechaLanzamiento: {
    type: Date,
    required: true,
  },
  director: {
    type: Array,
    required: true,
  },
  temporadas: {
    type: Number,
    required: true,
  },
  cantidadEpisodios: {
    type: Number,
    required: true,
  },
  active: Boolean,
});

module.exports = mongoose.model("Series", seriesShema);
