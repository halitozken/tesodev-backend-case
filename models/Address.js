const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  AddressLine: {
    type: String,
  },

  City: {
    type: String,
    required: [true, "Please provide a city"],
  },

  Country: {
    type: String,
    required: [true, "Please provide a country"],
  },

  CityCode: {
    type: Number,
    required: [true, "Please provide a city code"],
  },
});

const AddressModel = mongoose.model("Address", AddressSchema);

module.exports = AddressModel;