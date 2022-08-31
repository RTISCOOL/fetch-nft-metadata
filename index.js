var FetchNFTMetadata = function (provider) {
  if (!provider) {
    provider = "https://cloudflare-eth.com/v1/mainnet";
  }
  var Web3 = require("web3");
  var axios = require("axios");
  var web3 = new Web3(new Web3.providers.HttpProvider(provider));

  var fetch = async function (contract, tokenId) {
    if(!contract) {
        throw new Error("No contract address provided");
    }
    if(!tokenId) {
        throw new Error("No tokenId provided");
    }
    
    var ERC721 = new web3.eth.Contract(require("./erc721.json"), contract);
    var ERC1155 = new web3.eth.Contract(require("./erc1155.json"), contract);
    var metadataUrl = "";
    try {
      metadataUrl = await ERC721.methods.tokenURI(tokenId).call();
    } catch (e) {
      try {
        metadataUrl = await ERC1155.methods.tokenURI(tokenId).call();
      } catch (e) {
        throw new Error("Token not found");
      }
    }

    return await fetchMetadata(metadataUrl);
  };

  var fetchMetadata = async function (url) {
    if (url.startsWith("ipfs://")) {
      url = url.replace("ipfs://", "https://ipfs.io/ipfs/");
    }

    var metadata = await axios.get(url);
    if (
      metadata.data &&
      metadata.data.image &&
      metadata.data.image.startsWith("ipfs://")
    ) {
      metadata.data.image = metadata.data.image.replace(
        "ipfs://",
        "https://ipfs.io/ipfs/"
      );
    }
    return metadata.data;
  };
  return {
    fetch: fetch,
  };
};

module.exports = FetchNFTMetadata;
