import { BigNumber, ethers } from 'ethers';
import { abi as switcheoABI, accountAddresses } from './datasource.js';

//! ASSUMPTIONS - Output is in the format of line by line console.log(address amount)

const BSC_RPC = 'https://bsc-dataseed.binance.org/';

// Init BSC provider
const bscProvider = new ethers.providers.JsonRpcProvider(BSC_RPC);

// Setup switcheo contract interface and contract instance
const switcheoInterface = new ethers.utils.Interface(switcheoABI);
const switcheoInstance = new ethers.Contract(
  '0xc0ecb8499d8da2771abcbf4091db7f65158f1468',
  switcheoABI
);

// Connect to contract to BSC provider
const switcheoContract = switcheoInstance.connect(bscProvider);

// Obtain token formatUnits
const switcheoUnits: string = await switcheoContract.functions.decimals();

// Query for amount of tokens held by the addresss and awaiting for Promise to resolve
const output: string[] = await Promise.all(
  accountAddresses.map(async (address: string) => {
    try {
      const currentBalance: BigNumber[] = await switcheoContract.functions.balanceOf(address);
      const formatedBalance = ethers.utils.formatUnits(currentBalance[0], switcheoUnits);
      const outputLine = `${address} ${formatedBalance}`;
      return outputLine;
    } catch (err) {
      console.log(err);
    }
  })
);
output.forEach((line) => {
  console.log(line);
});
