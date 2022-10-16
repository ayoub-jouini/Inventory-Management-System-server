const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
  date: { type: Date, required: true, default: new Date.now() },
  price: { type: Number, required: true },
  creator: { type: String, required: true },
  client: { type: String, required: true },
  products: {
    type: [
      {
        productID: { type: String },
        ProductName: { type: String },
        amount: { type: Number },
      },
    ],
    required: true,
  },
});

module.exports = mongoose.model("Sale", saleSchema);
