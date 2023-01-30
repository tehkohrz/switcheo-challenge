const { ethers } = require('ethers');

const ADDR = '0x3C59CCb88ebFEfE5bA06669872EADd2f5A8728Ed'; // your contract address
const ABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'address[]',
        name: 'tokenAddresses',
        type: 'address[]',
      },
    ],
    name: 'getBalances',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'balance',
            type: 'uint256',
          },
        ],
        internalType: 'struct Proxy.TokenBalance[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
]; // your contract ABI

const ADDRESS = '0x8dee5777e20a37dc65f4c2b1ac09bf983649a174'; // some wallet address with token balance

const TOKENS = [
  // token contract addresses
  '0x64544969ed7ebf5f083679233325356ebe738930',
  '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd',
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = new ethers.providers.JsonRpcProvider(
  'https://data-seed-prebsc-1-s3.binance.org:8545/'
);

const test = async () => {
  const contract = new ethers.Contract(ADDR, ABI, provider);

  const balances = await contract.getBalances(ADDRESS, TOKENS);
  return balances;
};

test().then(console.log);
