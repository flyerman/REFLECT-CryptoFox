require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("hardhat-abi-exporter");


var fs = require('fs');
const home = require('os').homedir();
const keyfile = require('path').join(home, '.key')
var goFundGeoKey = fs.readFileSync(keyfile, { encoding: 'utf8' });

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.6.2",
    networks: {
        cheapeth: {
            url: "https://rpc.cheapeth.org/rpc",
            accounts: [goFundGeoKey],
            gasPrice: 2000000000
        }
    }
};
