const mongoose = require("mongoose");
const app = require("./server");
const {
  DB_User,
  DB_Password,
  DB_Host,
  API_Version,
  IP_Server,
} = require("./constants");

const PORT = process.env.POST || 3977;

mongoose.connect(
  `mongodb+srv://${DB_User}:${DB_Password}@${DB_Host}/`,
  (error) => {
    if (error) throw error;

    app.listen(PORT, () => {
      console.log("##################");
      console.log("#####API REST#####");
      console.log("##################");
      console.log(`http://${IP_Server}:${PORT}/api/${API_Version}`);
    });
  }
);
