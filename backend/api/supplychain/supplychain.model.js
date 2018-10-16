const mongoose = require("mongoose");

const { Schema } = mongoose;

let Supply = null;

try {
  const SupplySchema = new Schema(
    {
      supplier: String,
      buyer: String,
      timestamp: Number,
      supplyConfirmed: {
        type: Boolean,
        default: false
      }
    },
    { strict: false }
  );

  Supply = mongoose.model("Supply", SupplySchema);
} catch (e) {
  Supply = mongoose.model("Supply");
}

module.exports = Supply;
