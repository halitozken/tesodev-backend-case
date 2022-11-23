const express = require("express");
const router = express.Router();

const {
  getAllCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomer,
  validateCustomer,
} = require("../controllers/customer");

router.post("/createCustomer", createCustomer);
router.put("/updateCustomer/:id", updateCustomer);
router.delete("/deleteCustomer/:id", deleteCustomer);
router.get("/getAllCustomers", getAllCustomers);
router.get("/getCustomer/:id", getCustomer);
router.get("/validateCustomer/:id", validateCustomer);

module.exports = router;
