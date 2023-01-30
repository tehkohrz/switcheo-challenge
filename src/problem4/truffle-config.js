const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */
  api_keys: {
    bscscan: 'QZMV7SW7TNR1U2F3EZDWBB5EF9Y66A1D1A',
  },
  dashboard: {
    port: 24012,
  },
  networks: {
    development: {
      host: '127.0.0.1', // Localhost (default: none)
      port: 9545, // Standard Ethereum port (default: none)
      network_id: '*', // Any network (default: none)
    },
    // BSC test network configurations
    bscTestnet: {
      provider: () =>
        new HDWalletProvider(
          'eagle large alley glimpse calm kiss they index fame able episode obvious',
          'https://data-seed-prebsc-1-s3.binance.org:8545/'
        ),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    bscMainnet: {
      provider: () =>
        new HDWalletProvider(process.env.mnemonic, 'https://bsc-dataseed.binance.org/'),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    dashboard: {
      host: 'localhost',
      port: '24012',
      networkCheckTimeout: 120000,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: '^0.8.13',
    },
  },
};

