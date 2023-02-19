/** @type import('hardhat/config').HardhatUserConfig */
const dotenv = require("dotenv");
dotenv.config({path: __dirname + '/.env'});
const { URL, ACCOUNT_PRIVATE_KEY } = process.env;
module.exports = {
  defaultNetwork: "polygon",
  networks: {
    hardhat: {
    },
    polygon: {
      url: URL,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`],
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
