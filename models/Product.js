const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  amount: { type: Number, required: true },
  image: { type: String, required: true },
  onStock: { type: Boolean, required: true },
});

module.exports = mongoose.model("Product", productSchema);
