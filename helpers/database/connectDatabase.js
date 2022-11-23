const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDb Connection Successfull");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;
