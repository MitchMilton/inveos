const initiate = require("./initiate");

const account = rocess.env.EOSIO_CONTRACT_ACCOUNT;

module.exports = [
  {
    actionType: `${account}::initiate`,
    updater: initiate
  }
];
