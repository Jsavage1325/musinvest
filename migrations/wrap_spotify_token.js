var Web3 = require('web3');
var fs = require('fs');
var Contract = require('web3-eth-contract');

const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

var jsonFile = "../SuperTokenFactoryABI.json";
var contract_abi = JSON.parse(fs.readFileSync(jsonFile));
var contract_address = "0xF5F666AC8F581bAef8dC36C7C8828303Bd4F8561"

const SuperTokenFactory = new Contract(contract_abi, contract_address);

var address = "0xF5F666AC8F581bAef8dC36C7C8828303Bd4F8561";
var upgradable = 1;
var name = "SuperSpotifyToken";
var symbol = "SPTx";

var response = SuperTokenFactory.methods.createERC20Wrapper([address, upgradable, name, symbol]).call();


