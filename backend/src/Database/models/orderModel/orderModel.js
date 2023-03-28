const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, "Must be required"],
    },
    products: [
      {
        productId: {
          type: String,
        },
      },
      {
        Quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: {
      type: Number,
      required: [true, "Must be required"],
    },
    address: {
      type: Object,
      required: [true, "Must be required"],
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
