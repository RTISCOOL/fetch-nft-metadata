
# NodeJS Fetch Ethereum NFT Metadata

This package fetches an NFT Metadata from a contract using ERC721 or ERC1155 (Most NFTs)

It also proxies ipfs urls to https






## Installation

Install fetch-nft-metadata with npm

```bash
  npm install fetch-nft-metadata
```
    
## Usage/Examples

A full example is availible in ./example.js


```javascript
(async () => {
  var FetchNFTMetadata = require("fetch-nft-metadata")(
    "ETH-RPC-URL" // YOUR ETHEREUM RPC URL HERE default is "https://cloudflare-eth.com/v1/mainnet"
  );

  var result = await FetchNFTMetadata.fetch(
    "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d", // YOUR TOKEN CONTRACT ADDRESS HERE
    476 // YOUR TOKEN ID HERE
  );
  console.log(result); // result is the metadata object, ipfs is proxied to https://ipfs.io/ipfs/
})();

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## Authors

- Ryan Trattner [@RTISCOOL](https://www.github.com/RTISCOOL)


## License

[MIT](https://choosealicense.com/licenses/mit/)


