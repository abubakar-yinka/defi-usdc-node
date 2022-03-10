const ethers = require("ethers");
const { address, abi } = require("./utils/config");
const provider = require("./utils/provider");
const wallet = require("./utils/wallet");

//Logic to read from the smart contract.
const main = async () => {
  //Connect to the eth blockchain
  const account = wallet.connect(provider);

  //ABI is a JSON document that describes the interface of all the solidity functions
  const usdc = new ethers.Contract({
    address,
    abi,
    account,
  });

  const usdcBalance = await usdc.balanceOf(account.address);

  console.log(`USDC Balance: ${ethers.utils.formatUnits(usdcBalance, 6)}`);
};

main();
