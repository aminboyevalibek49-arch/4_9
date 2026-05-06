const { read_file, write_file } = require("../fs/file_system");

const getAllProducts = async (req, res) => {
  const products = read_file("products.json");
  res.render("index", { products });
};

const addProduct = async (req, res) => {
  const products = read_file("products.json");
  const newProduct = req.body;
  products.push(newProduct);
  write_file("products.json", products);
  res.redirect("/products/get_all_products");
};

module.exports = { getAllProducts, addProduct };
