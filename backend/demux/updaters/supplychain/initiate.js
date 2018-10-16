async function initiate(state, payload) {
  const Supply = state.supply;
  try {
    let supply = await Supply.find({
      _id: payload.data.invoice_id
    }).exec();

    if (supply.length !== 0) return;

    supply = new Supply({
      _id: payload.data.invoice_id,
      supplier: payload.data.supplier,
      buyer: payload.data.buyer,
      products: payload.data.products,
      timestamp: payload.data.timestamp,
      supplyConfirmed: true
    });

    await supply.save();
  } catch (err) {
    console.log(err);
  }
}

module.exports = initiate;
