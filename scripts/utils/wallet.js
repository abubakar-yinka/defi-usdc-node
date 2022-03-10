const ethers = require("ethers");

const mnemonic =
  "razor write recall valid dose survey subway window jungle mail concert asset";

const wallet = ethers.Wallet.fromMnemonic(mnemonic);

console.log(`Mnemonic phrase: ${wallet.mnemonic.phrase}`);

console.log(`Address: ${wallet.address}`);

module.exports = wallet;