import express from "express";
import products from "./products.js";

const port = 5000;

const app = express();
app.enable("trust proxy");

app.get("/", (req, res) => {
  // console.log(req.ip);
  // console.log("test log");
  res.send(`<h1>API is running..., your IP is ${req.ip}</h1>`);
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
