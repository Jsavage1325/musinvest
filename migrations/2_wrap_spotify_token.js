var Web3 = require('web3');
var fs = require('fs');
var Contract = require('web3-eth-contract');


module.exports = async function (deployer) {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

    var jsonFile = "./SuperTokenFactoryABI.json";
    var contract_abi = JSON.parse(fs.readFileSync(jsonFile));
    var contract_address = "0xF5F666AC8F581bAef8dC36C7C8828303Bd4F8561";
    var my_addr = "0xC3086402039e344140f711dC7AFa259ca362f0bb";
    

    const SuperTokenFactory = new web3.eth.Contract(contract_abi, contract_address);


    var upgradable = 1;
    var name = "SuperCashToken";
    var symbol = "CSHx";

    await SuperTokenFactory.methods.createERC20Wrapper(contract_address, upgradable, name, symbol).send({from:my_addr});
}


