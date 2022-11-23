const express = require("express");
const router = express.Router();

const {
  createOrder,
  updateOrder,
  deleteOrder,
  getAllOrders,
  getOrder,
  getAllOrdersFromCustomer,
  changeOrderStatus,
} = require("../controllers/order");

router.post("/createOrder/:id", createOrder);
router.put("/updateOrder/:id", updateOrder);
router.delete("/deleteOrder/:id", deleteOrder);
router.get("/getAllOrders", getAllOrders);
router.get("/getOrder/:id", getOrder);
router.get("/getAllOrdersFromCustomer/:id", getAllOrdersFromCustomer);
router.put("/changeOrderStatus/:id", changeOrderStatus);

module.exports = router;
