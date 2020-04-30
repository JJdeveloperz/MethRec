// var HDWalletProvider = require("truffle-hdwallet-provider");
// const mnemonic = 'shrug pave sand alien cruel summer witness begin cherry eager group humble';
// module.exports = {
//   // See <http://truffleframework.com/docs/advanced/configuration>
//   // for more about customizing your Truffle configuration!
//   networks: {
//     // development: {
//     //   host: "127.0.0.1",
//     //   port: 7545,
//     //   network_id: "*" // Match any network id
//     // },
//     ropsten: {
//       provider: () => new HDWalletProvider(mnemonic,`https://ropsten.infura.io/v3/60c687d1b8034d33b89ffb4f8940e7bc`),
//       network_id: 3,       // Ropsten's id
//       // gas: 5500000,        // Ropsten has a lower block limit than mainnet
//       // // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
//       // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
//       // // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
//     }
//     // develop: {
//     //   port: 8545
//     // }
//   }
// };


var HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = 'shrug pave sand alien cruel summer witness begin cherry eager group humble';
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
 ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/b3d8c46b362e4e1fa80a65383e470395");
      },
      network_id: 3,
      gasPrice: 20000000000,
      gas: 3716887
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/b3d8c46b362e4e1fa80a65383e470395");
      },
      network_id: 4,
      gasPrice: 20000000000,
      gas: 3716887
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://kovan.infura.io/v3/b3d8c46b362e4e1fa80a65383e470395");
      },
      network_id: 42,
      gasPrice: 20000000000,
      gas: 3716887
    },
    main: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/b3d8c46b362e4e1fa80a65383e470395");
      },
      network_id: 1,
      gasPrice: 20000000000, // 20 GWEI
      gas: 3716887    // gas limit, set any number you want
    }
  }
};
