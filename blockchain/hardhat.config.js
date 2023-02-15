/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
    },
    matic: {
      url: 'https://polygon-mainnet.g.alchemy.com/v2/nqBl6KQB2xMolO79psPuCgE7RFXOA31u',
      accounts: ['6ceec19ba7d6b0436ac30675c0ba4003e0d048653dc24ce472541ad968673157'],
    }
  },
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
