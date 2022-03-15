require("dotenv").config();
const ethers = require("ethers");

const mnemonic = process.env.MNEMONIC;

const wallet = ethers.Wallet.fromMnemonic(mnemonic);

console.log(`Mnemonic phrase: ${wallet.mnemonic.phrase}`);

console.log(`Address: ${wallet.address}`);

module.exports = wallet;
