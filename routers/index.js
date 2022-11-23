const express = require("express");
const router = express.Router();

const customer = require("./customer");
const order = require("./order");

router.use("/customer", customer);
router.use("/order", order);

module.exports = router;
