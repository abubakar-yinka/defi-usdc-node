const ethers = require("ethers");

//Connect to ropsten testnet to user fake ether; Infura will be used to run our eth node and expose it with the URL
const provider = ethers.getDefaultProvider("ropsten", {
  infura: "https://ropsten.infura.io/v3/bb5f27d660ef40aeba3238e77c120cd5",
});

module.exports = provider;
