const SpotifyToken = artifacts.require("SpotifyToken");

module.exports = async function(callback) {
    try {
        const version = process.env.RELEASE_VERSION || "test";
        console.log("release version:", version);

        // make sure that we are using the same web3 provider in the helpers
        setWeb3Provider(web3.currentProvider);

        const token = await web3tx(
            MusicInvestToken.new,
            "Deploy MusicInvestToken"
        )(
            "Music Invest Token",
            "MIT",
            // renamed from fDAIx
            sf.tokens.MITx.address,
            sf.host.address,
            sf.agreements.ida.address
        );
        console.log("Token deployed at", token.address);
        callback();
    } catch (err) {
        callback(err);
    }
};
