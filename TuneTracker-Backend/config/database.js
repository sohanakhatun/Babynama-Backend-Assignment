const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_URL } = process.env;
exports.connect = () => {
  mongoose
    .connect(MONGODB_URL)
    .then(console.log("DB Connection Successful"))
    .catch((err) => {
      console.log("DB Connection Failed");
      console.log("This Error was found while connecting to database", err);
      process.exit(1);
    });
};
