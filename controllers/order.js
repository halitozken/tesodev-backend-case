const asyncErrorWrapper = require("express-async-handler");
const OrderModel = require("../models/Order");
const CustomerModel = require("../models/Customer");
const ProductModel = require("../models/Product");

const createOrder = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;
  const { Product, Order } = req.body;

  const customer = await CustomerModel.findById(id);
  const product = await ProductModel.insertMany(Product);
  const order = await OrderModel.create({
    CustomerId: customer.id,
    Quantity: Product.length,
    Price: Order.Price,
    Status: Order.Status,
    Address: customer.Address,
    Product: product,
  });

  res.status(200).json({
    success: true,
    data: order,
  });
});

const updateOrder = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;
  const { Products, Order } = req.body;

  let order = await OrderModel.findById(id);

  for (let i = 0; i < Products.length; i++) {
    const element = Products[i];
    const newProduct = await ProductModel.create({ ...element });
    order.Product.push(newProduct);
    order.markModified("Product");
    await order.save();
  }

  order.Price = Order.Price;
  order.Status = Order.Status;
  order.Quantity = order.Product.length;
  await order.save();

  res.status(200).json({
    success: true,
    data: order,
  });
});

const deleteOrder = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;
  await OrderModel.findByIdAndDelete(id);

  res.status(200).json({
    success: true,
    message: "Order deleted successfully",
  });
});

const getAllOrders = asyncErrorWrapper(async (req, res, next) => {
  const order = await OrderModel.find();
  res.status(200).json({
    success: true,
    data: order,
  });
});

const getAllOrdersFromCustomer = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;
  const order = await OrderModel.find().where({ CustomerId: id });

  res.status(200).json({
    success: true,
    data: order,
  });
});

const getOrder = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;
  const order = await OrderModel.findById(id);

  res.status(200).json({
    success: true,
    data: order,
  });
});

const changeOrderStatus = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;
  const { Status } = req.body;

  let order = await OrderModel.findById(id);
  order.Status = Status;
  await OrderModel.save(order);

  res.status(200).json({
    success: true,
    changedStatus: Status,
    data: order,
  });
});

module.exports = {
  createOrder,
  updateOrder,
  deleteOrder,
  getAllOrders,
  getOrder,
  getAllOrdersFromCustomer,
  changeOrderStatus,
};
