function initiate(payload, context) {
  const supply = {
    supplier: payload.data.supplier,
    buyer: payload.data.buyer,
    products: payload.data.products,
    timestamp: payload.data.timestamp
  };

  context.socket.emit("initiate", supply);
}

module.exports = initiate;
