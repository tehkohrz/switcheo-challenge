// SPDX-License-Identifier: MIT
// Tells the Solidity compiler to compile only from v0.8.13 to v0.9.0
pragma solidity ^0.8.13;

contract ToshiCoin {
  mapping (address => uint) public balances;

  constructor() {
    address[10] memory mockAccounts = [0x03024d6fF86175E38609635027F2912703666305,
  0x2f011dE81A9a63B261070d8DAA7F654d107BD76e,
  0x24079f6e117eEA66c356ab04E833bd6257d5889A,
  0xfC84D81E495B8fB105229D8346DfaDeAfa9f06d8,
  0x5579d978E2e8b4D8d0da2Ab0a9938dD48Ab316CA,
  0xFa25cf6F7167D39A8265F3aEE3579D7EBBB63366,
  0x203dB19dBE34ac4137a4ceF0EaC227C710c72BaD,
  0x25948198e58254844FBa8aF742cB2B2470CA5B22,
  0xAf782F244BB6662E9C01717DcAc822eA3D009C52,
  0x3c8ef066ecF73247E23794C5e43fBEcD91448287];
    for(uint i=0; i<mockAccounts.length; i+=1 ){
      balances[mockAccounts[i]] = 10000;
    }

  }
  // Function to check balance of Toshi token
  function getBalance (address account) public view returns (uint256) {
    return balances[account];
  }
}