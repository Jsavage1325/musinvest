const SpotifyToken = artifacts.require("SpotifyToken");

async function main() {

  
    await devToken.deployed();
  
    console.log("Token deployed to:", devToken.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });