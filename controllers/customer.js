const asyncErrorWrapper = require("express-async-handler");
const CustomerModel = require("../models/Customer");
const AddressModel = require("../models/Address");

const createCustomer = asyncErrorWrapper(async (req, res, next) => {
  const { Customer, Address } = req.body;

  const address = await AddressModel.create({
    ...Address,
  });

  const customer = await CustomerModel.create({
    ...Customer,
    Address: address,
  });

  res.status(200).json({
    success: true,
    data: {
      customer,
      address,
    },
  });
});

const updateCustomer = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;
  const { Customer, Address } = req.body;

  const customer = await CustomerModel.findById(id);
  customer.Name = Customer.Name;
  customer.Email = Customer.Email;
  Address ? (customer.Address = Address) : null;
  await customer.save();

  res.status(200).json({
    success: true,
    data: customer,
  });
});

const deleteCustomer = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params.id;

  await CustomerModel.deleteOne({ id });

  res.status(200).json({
    success: true,
    message: "Customer deleted successfully",
  });
});

const getAllCustomers = asyncErrorWrapper(async (req, res, next) => {
  const customer = await CustomerModel.find();

  res.status(200).json({
    success: true,
    data: customer,
  });
});

const getCustomer = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;

  const customer = await CustomerModel.findById(id);

  res.status(200).json({
    success: true,
    data: customer,
  });
});

const validateCustomer = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;
  const customer = await CustomerModel.findById(id);

  if (customer) {
    res.status(200).json({
      success: true,
      data: customer,
    });
  } else {
    res.status(200).json({
      success: false,
      data: customer,
    });
  }
});

module.exports = {
  getAllCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomer,
  validateCustomer,
};
