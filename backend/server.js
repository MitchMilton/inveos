require("dotenv").config();
const app = require("express")();
const cors = require("cors");
const demux = require("./demux");
const SupplychainRoute = require("./api/supplychain/supplychain.route");
const io = require("./utils/io");

app.use(cors());

app.use("/supplychain", SupplychainRoute);

const port = process.env.PORT;

const server = app.listen(port, () =>
  console.info(`Supplychain Dapp listening on port ${process.env.PORT}!`)
);

io.connect(server);

demux.watch();
