const { ethers } = require("ethers");

const MOCKADDRESSES =['0x03024d6fF86175E38609635027F2912703666305',
  '0x2f011dE81A9a63B261070d8DAA7F654d107BD76e',
  '0x24079f6e117eEA66c356ab04E833bd6257d5889A',
  '0xfC84D81E495B8fB105229D8346DfaDeAfa9f06d8',
 '0x5579d978E2e8b4D8d0da2Ab0a9938dD48Ab316CA',
  '0xFa25cf6F7167D39A8265F3aEE3579D7EBBB63366',
 '0x203dB19dBE34ac4137a4ceF0EaC227C710c72BaD',
 '0x25948198e58254844FBa8aF742cB2B2470CA5B22',
 '0xAf782F244BB6662E9C01717DcAc822eA3D009C52',
 '0x3c8ef066ecF73247E23794C5e43fBEcD91448287']

const ADDR = "0x03024d6fF86175E38609635027F2912703666305";   // your contract address
const ABI = […];    // your contract ABI

const ADDRESS = MOCKADDRESSES[0]; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"0x2C5798D9Bd0e5Ee3fE1665fB474B0391962Fd00C",
	"0x953192475005900b596E0C93D0bf2C0aB8bAd17f",
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = ethers.providers('https://data-seed-prebsc-1-s3.binance.org:8545/');

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

  const balances = await contract.getBalances(ADDRESS, tokens);
	
	return balances;
};

test().then(console.log);