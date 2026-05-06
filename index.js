const express = require("express");
const cors = require("cors");
require("dotenv").config();
const productRouter = require("./router/products.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.redirect("/products/get_all_products");
});

app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log("Server is running at: http://localhost:" + PORT);
});
