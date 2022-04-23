const { web3tx } = require("@decentral.ee/web3-helpers");
const { setWeb3Provider } = require("@decentral.ee/web3-helpers/src/config");
const SuperfluidSDK = require("@superfluid-finance/js-sdk");
const MusicInvestToken = artifacts.require("MusicInvestToken");
const { Web3Provider } = require("@ethersproject/providers");
var Web3 = require('web3');

module.exports = async function(deployer) {

    // sf = new SuperfluidSDK.Framework({
    //     web3,
    //     version: "v1",
    //     tokens: ["fDAI"]
    // });

    // await sf.initialize();

    await deployer.deploy(MusicInvestToken, "Music Invest Token", "MIT", "0xB806966A6078ac78c789665c177DFDacfd544E71", "0xF0d7d1D47109bA426B9D8A3Cde1941327af1eea3", "0x556ba0b3296027Dd7BCEb603aE53dEc3Ac283d2b");

};

/*
string memory name,
string memory symbol,
ISuperToken cashToken,
ISuperfluid host,
IInstantDistributionAgencodeWithSignatureeementV1 ida)
ERC20(name, symbol)
*/