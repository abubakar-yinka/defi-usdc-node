const ethers = require("ethers");

const wallet = ethers.Wallet.createRandom();

//Mnemonic phrase is a sequence of 12 words used to generate the private key
console.log(`Mnemonic phrase: ${wallet.mnemonic.phrase}`);

console.log(`Address: ${wallet.address}`);
