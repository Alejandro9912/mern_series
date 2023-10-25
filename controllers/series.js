const Series = require("../models/series");

async function createSerie(req, res) {
  const series = new Series({ ...req.body, active: false });

  series.save((error, serieStored) => {
    if (error) {
      res.status(400).send({ msg: "Error al crear el menu" });
    } else {
      res.status(200).send(serieStored);
    }
  });
}

async function getSeries(req, res) {
  const { director } = req.query;

  let response = null;

  if (director === undefined) {
    response = await Series.find().sort({ nombre: "asc" });
  } else {
    response = await Series.find({ director }).sort({ nombre: "asc" });
  }

  if (!response) {
    res.status(400).send({ msg: "No se ha encontrado ninguna serie" });
  } else {
    res.status(200).send(response);
  }
}

async function updateSerie(req, res) {
  const { id } = req.params;

  const serieData = req.body;

  series.findByIdAndUpdate({ _id: id }, serieData, (error) => {
    if (error) {
      res.status(400).send({ msg: "Error al actualizar el menu" });
    } else {
      res.status(200).send({ msg: "Actualizacion correcta" });
    }
  });
}

async function deleteSerie(req, res) {
  const { id } = req.params;

  series.findByIdAndDelete(id, (error) => {
    if (error) {
      res.status(400).send({ msg: "Error al eliminar el menu" });
    } else {
      res.status(200).send({ msg: "Eliminacion correcta" });
    }
  });
}
module.exports = {
  createSerie,
  getSeries,
  updateSerie,
  deleteSerie,
};
