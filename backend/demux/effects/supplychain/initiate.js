function initiate(payload, context) {
  const supply = {
    _id: payload.data.invoice_id,
    supplier: payload.data.supplier,
    buyer: payload.data.buyer,
    products: payload.data.products,
    timestamp: payload.data.timestamp
  };

  context.socket.emit("initiate", supply);
}

module.exports = initiate;
