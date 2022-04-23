const MusicInvestToken = artifacts.require("MusicInvestToken");


module.exports = async function (deployer) {

    var TestContract = new web3.eth.Contract(MusicInvestToken.abi, '0x1E9b2AAf45F753995001d22524313C3b1d80819f');

    // await TestContract.methods.issue(
    //     "0xD245Fbe9F1F7cf8944528bA1CeD277272f0da061", 10).send({ from: '0xC3086402039e344140f711dC7AFa259ca362f0bb' })
    //     .on("receipt", function (err, transactionHash) {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             console.log(transactionHash);
    //         }
    //     });

    await TestContract.methods.distribute(
        100).send({ from: '0xC3086402039e344140f711dC7AFa259ca362f0bb' })
        .on("receipt", function (err, transactionHash) {
            if (err) {
                console.log(err);
            } else {
                console.log(transactionHash);
            }
        });

    // web3.eth.sendTransaction({data: code}, function(err, transactionHash) {
    //     if (!err)
    //       console.log(transactionHash);

    //     var receipt = web3.eth.getTransactionReceipt(transactionHash);
    //   });
};