const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderModel = require("./Order");
const { v4: uuidv4 } = require("uuid");

const CustomerSchema = new Schema({
  _id: { type: String, default: uuidv4() },

  Name: {
    type: String,
    required: [true, "Please provide a name"],
  },

  Email: {
    type: String,
    required: [true, "Please provide a email"],
  },

  Address: {
    type: mongoose.ObjectId,
    ref: "Address",
    required: [true, "Please provide a address"],
  },

  UpdatedAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },

  CreatedAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});

// CustomerSchema.pre("save", (req, res, next) => {
//   this.UpdatedAt = Date.now();
//   return next();
// });

// CustomerSchema.post("remove", async function () {

//   await OrderModel.deleteMany({
//     CustomerId: this._id,
//   });

//   const customer = await CustomerModel.find({ id: this._id });
//   const addressId = customer.Address.objectId();
//   await AddressModel.findByIdAndDelete(addressId);
// });

const CustomerModel = mongoose.model("Customer", CustomerSchema);

module.exports = CustomerModel;