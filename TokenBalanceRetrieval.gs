const API_KEYS = {
  "ethereum": "<ETHEREUM_KEY_HERE>",
  "polygon": "<POLYGON_KEY_HERE>",
  "bsc": "<BSC_KEY_HERE>"
}

const BASE_URLS = {
  "ethereum": "https://api.etherscan.io/api",
  "polygon": "https://api.polygonscan.com/api",
  "bsc": "https://api.bscscan.com/api"
}

/**
 * Get Current Token balance of the speciffied wallet address and contract address
 *
 * @param {walletAddress} Wallet Address that you want to query
 * @param {contractAddress} Contract Address that you want to query
 * @return Token Balance
 * @customfunction
 */
function GETTOKENBALANCE(walletAddress, contractAddress, network, divisor=18) {
  const url = `${BASE_URLS[network]}?address=${walletAddress}&contractaddress=${contractAddress}&apikey=${API_KEYS[network]}&module=account&action=tokenbalance&tag=latest`;
  
  const response = UrlFetchApp.fetch(url);
  if (response.getResponseCode() == 200){
    var result = JSON.parse(response.getContentText());
    return result.result/Math.pow(10, divisor);
  }
  
  return 0;
}