const mongoose = require("mongoose");

const { Schema } = mongoose;

let Supply = null;

try {
  const SupplySchema = new Schema({
    _id: String,
    supplyConfirmed: {
      type: Boolean,
      default: false
    }
  });

  Supply = mongoose.model("Supply", SupplySchema);
} catch (e) {
  Supply = mongoose.model("Supply");
}

module.exports = Supply;
