const express = require("express");
const {
  getAllProducts,
  addProduct,
} = require("../controller/products.controller");

const productRouter = express.Router();

productRouter.get("/get_all_products", getAllProducts);
productRouter.post("/add_product", addProduct);

module.exports = productRouter;
