
import express from "express";
import dotenv from "dotenv";
import connectDB from "../config/db.js";

import {
  createProduct,
  readProducts,
  readProductById,
  updateProductForm,
  updateProduct,
  deleteProduct,
  createProductForm,
} from "../controllers/productController.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(async (req, res, next) => {
  try {
    await connectDB(process.env.MONGO_URI, process.env.DB_NAME);
    next();
  } catch (error) {
    next(error);
  }
});

app.get("/product-form", createProductForm);
app.post("/add-product", createProduct);
app.get("/", readProducts);
app.get("/product/:id", readProductById);
app.get("/product-form/:id", updateProductForm);
app.post("/add-product/:id", updateProduct);
app.get("/delete-product/:id", deleteProduct);

export default app;
