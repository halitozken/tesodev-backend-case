const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require("uuid");

const ProductSchema = new Schema({
  _id: {
    type: String,
    default: () => uuidv4(),
  },

  ImageUrl: {
    type: String,
  },

  Name: {
    type: String,
    required: true,
  },
}); 

const ProductModel = mongoose.model("Product", ProductSchema);
module.exports = ProductModel;
