// SPDX-License-Identifier: MIT
// Tells the Solidity compiler to compile only from v0.8.13 to v0.9.0
pragma solidity ^0.8.13;

contract Proxy {
  // No need for other functions other than call balances
  // Function to check balance of Toshi token
  function getBalances (address account, address[] calldata tokenContracts) public view returns (uint256) {
    outputFormat[] memory queryOutput;
    for(uint i=0; i <tokenContracts.length; i+=1){
      Callee tokenContract = Callee(tokenContracts[i]);
      uint tokenAmount = tokenContract.getBalance(account);
      queryOutput[i] = {token: tokenContract, amount:tokenAmount};
    }

  }
}
abstract contract Callee  {
    function getBalance (address account) public virtual returns (uint);
}
struct outputFormat {
  string token;
  uint amount;
}