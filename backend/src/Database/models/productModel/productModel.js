const mongoose = require("mongoose");


const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Must be required"],
    },
    description: {
      type: String,
    },
    price: {
      type: String,
      required: [true, "Must be required"],
    },
    image: {
      type: String,
      required: [true, "Must be required"],
    },
    categories: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
