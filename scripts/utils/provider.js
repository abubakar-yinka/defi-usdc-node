require("dotenv").config();
const ethers = require("ethers");

//Connect to ropsten testnet to user fake ether; Infura will be used to run our eth node and expose it with the URL
const provider = ethers.getDefaultProvider("ropsten", {
  infura: process.env.INFURA_ADDRESS,
});

module.exports = provider;
