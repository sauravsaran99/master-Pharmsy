const express = require("express");
const router = express.Router();
const Product = require("../model/product.model");

router.get("/:id", async (req, res, next) => {
  try {
    
    const product = await Product.findById(req.params.id)
    console.log(product)
    return res.status(200).send(product);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

module.exports = router;