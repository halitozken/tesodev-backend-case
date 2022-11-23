const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require("uuid");

const OrderSchema = new Schema({
  _id: { type: String, default: uuidv4() },

  CustomerId: {
    type: String,
    ref: "Customer",
    required: true,
  },

  Quantity: {
    type: Number,
    default: 0,
    required: true,
  },

  Price: {
    type: Number,
    required: true,
  },

  Status: {
    type: String,
    required: true,
  },

  Address: {
    type: String,
    ref: "Address",
    required: true,
  },

  Product: {
    type: Object,
    ref: "Product",
    required: true,
  },

  CreatedAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },

  UpdatedAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});

// OrderSchema.pre("save", (req, res, next) => {
//   this.UpdatedAt = Date.now();
//   return next();
// });

const OrderModel = mongoose.model("Order", OrderSchema);
module.exports = OrderModel;