const config = {
    //Address of USDC on ropsten
  address: "0x645300d27576d0113336FeC9F1F6d55a40a199b4",
  //array of function signature
  abi: [
    "function gimmeSome() external",
    "function balanceOf(address _owner) public view returns (uint256 balance)",
    "function transfer(address _to, uint256 _value) public returns (bool success)",
  ],
};

module.exports = config;
