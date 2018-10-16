const Supply = require("./supplychain.model");

/**
 * Get list of all Supplies confirmed by the blockchain
 * @returns {Supplies[]}
 */

const listConfirmed = async (req, res) => {
  try {
    const confirmedSupplies = await Supply.find({
      supplyConfirmed: true
    }).exec();

    res.send(confirmedSupplies);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { listConfirmed };
