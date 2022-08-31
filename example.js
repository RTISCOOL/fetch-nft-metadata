(async () => {
  var FetchNFTMetadata = require("./index.js")(
    // fetch-nft-metadata if using npm
    "ETH-RPC-URL" // YOUR ETHEREUM RPC URL HERE default is "https://cloudflare-eth.com/v1/mainnet"
  );

  var result = await FetchNFTMetadata.fetch(
    "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d", // YOUR TOKEN CONTRACT ADDRESS HERE
    476 // YOUR TOKEN ID HERE
  );
  console.log(result); // result is the metadata object, ipfs is proxied to https://ipfs.io/ipfs/
})();
