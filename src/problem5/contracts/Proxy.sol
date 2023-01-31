// SPDX-License-Identifier: MIT
// Tells the Solidity compiler to compile only from v0.8.13 to v0.9.0
pragma solidity ^0.8.13;
import "./IBEP20.sol";


contract Proxy {

  struct TokenBalance {
    address token;
    uint balance;
  }

  // Function to check balance of list of tokens
  function getBalances (address account, address[] memory tokenAddresses) public view returns (TokenBalance[] memory)  {
    uint size = tokenAddresses.length;
    TokenBalance[] memory walletBalance = new TokenBalance[](size);

    for(uint i=0; i <size; i+=1){
      IBEP20 tokenContract = IBEP20(tokenAddresses[i]);
      uint tokenAmount = tokenContract.balanceOf(account);
      // queryOutput[i] = TokenBalance(tokenAddresses[i], tokenAmount);
      walletBalance[i] = TokenBalance(tokenAddresses[i], tokenAmount);
    }
    return walletBalance;
  }
}