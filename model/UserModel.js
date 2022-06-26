const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    userWalletAddress: {
      type: String,
      required: true,
    },
    walletName: {
      type: String,
      default: "Metamask",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", schema);
