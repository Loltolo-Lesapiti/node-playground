const express = require("express");

const app = express();
const { products } = require("./navbar/data");

app.get("/", (req, res) => {
  res.send(
    `<h1>The information is found in <a href="/api/products">products</a></h1>`
  );
});

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const single_product = products.find(
    (product) => product.id == Number(productID)
  );
  if (!single_product) {
    return res.send("The product does not exisit");
  }
  return res.json(single_product);
});

app.get("/api/products", (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProduct);
});

//Query string or Url parameters.
app.get("/api/v1/products", (req, res) => {
  let sorted_products = [...products];
  let { search, limit } = req.query;
  if (search) {
    sorted_products = sorted_products.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sorted_products.slice(0, Number(limit));
  }
  if (sorted_products.length < 1) {
    return res.status(200).send({ sucess: true, data: [] });
  }
  res.status(200).send(sorted_products);
});

app.listen(5000, () => {
  console.log("Listening to port 5000");
});
