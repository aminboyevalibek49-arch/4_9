const { Router } = require("express");
const {
  getAllProducts,
  getOneProduct,
  getAddForm,
  addProduct,
  getEditForm,
  updateProduct,
  deleteProduct,
} = require("../controller/products.controller");

const router = Router();

router.get("/", getAllProducts);
router.get("/product/:id", getOneProduct);
router.get("/add", getAddForm);
router.post("/add", addProduct);
router.get("/edit/:id", getEditForm);
router.post("/edit/:id", updateProduct);
router.post("/delete/:id", deleteProduct);

module.exports = router;
