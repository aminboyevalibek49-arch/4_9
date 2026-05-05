const { read_file, write_file } = require("../fs/file_system");
const { v4 } = require("uuid");

// GET ALL
const getAllProducts = (req, res) => {
  const products = read_file("products.json");
  res.render("index", { products });
};

// GET ONE
const getOneProduct = (req, res) => {
  const { id } = req.params;
  const products = read_file("products.json");
  const product = products.find((p) => p.id === id);
  if (!product) return res.status(404).render("404");
  res.render("detail", { product });
};

// GET ADD FORM
const getAddForm = (req, res) => {
  res.render("add");
};

// POST - add
const addProduct = (req, res) => {
  const { name, price, category, description, emoji } = req.body;
  const products = read_file("products.json");

  products.push({
    id: v4(),
    name,
    price,
    category,
    description,
  });

  write_file("products.json", products);
  res.redirect("/");
};

// GET EDIT FORM
const getEditForm = (req, res) => {
  const { id } = req.params;
  const products = read_file("products.json");
  const product = products.find((p) => p.id === id);
  if (!product) return res.status(404).render("404");
  res.render("edit", { product });
};

// POST - update
const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price, category, description, emoji } = req.body;
  const products = read_file("products.json");

  const idx = products.findIndex((p) => p.id === id);
  if (idx === -1) return res.status(404).render("404");

  products[idx] = {
    ...products[idx],
    name: name || products[idx].name,
    price: price || products[idx].price,
    category: category || products[idx].category,
    description: description || products[idx].description,
    emoji: emoji || products[idx].emoji,
  };

  write_file("products.json", products);
  res.redirect("/");
};

// POST - delete
const deleteProduct = (req, res) => {
  const { id } = req.params;
  const products = read_file("products.json");
  const filtered = products.filter((p) => p.id !== id);
  write_file("products.json", filtered);
  res.redirect("/");
};

module.exports = {
  getAllProducts,
  getOneProduct,
  getAddForm,
  addProduct,
  getEditForm,
  updateProduct,
  deleteProduct,
};
