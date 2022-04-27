# Token Balance Retrieval Formula for Google Sheets

This Google App Script allows you to retrieve the token balance of your wallet for a specific smart contract and use it in Google Sheets

## Prerequisites

- API Keys from the Blockchain explorers.
    - Currently, we support Ethereum, BNB Smart Chain and Polygon. You can visit their relative explorer and get a key. Each explorer needs a seperate API key to function. 
        - Ethereum - https://etherscan.io/myapikey
        - Polygon - https://polygonscan.com/myapikey
        - BNB Smart Chain - https://bscscan.com/myapikey

    - After getting the Keys, Please copy it to somewhere safe as we need it in the installation step.

## Installation

1. Open an existing Google Spreadsheet or Create a new one
2. Navigate to Extensions > App Script. It will open up a new tab and goes to the "App Script Editor
3. Paste the code in `TokenBalanceRetrieval.gs` file
4. Paste the relevant API Keys that we copied earlier, to the `API_KEYS` object's relevant explorer value

    ```javascript
    const API_KEYS = {
        "ethereum": "xxxxxxxxxx",
        "polygon": "yyyyyyyyy",
        "bsc": "zzzzzzzz"
    }
    ```

5. Save the code by pressing Ctrl + S

## Usage

Go to the Google Sheet that you opened earlier and type the below code in a cell to get the balance

### Syntax:
    
```
= GETTOKENBALANCE(walletAddress, contractAddress, network, divisor=18)
```

| Parameter      | Description | Accepted Values |
| ----------- | ----------- | ----------- |
| `walletAddress`      | Your Wallet Address       | -       |
| `contractAddress`   | The Smart Contract Address        | -       |
| `network`      | The network that the smart contract and your wallet belongs to       | `"ethereum"` , `"polygon"` , `"bsc"`     |
| `divisor`   | The divisor of the token balance       | -       |

### Examples:

1. If the divisor is 18:

    ```
    = GETTOKENBALANCE("0xB8567865C1E46C6f6f4867A8Ff5D861Cfb3b3eae", "0x8D546026012bF75073d8A586f24A5d5ff75b9716", "polygon")
    ```

2. If the divisor is 9:

    ```
    = GETTOKENBALANCE("0xB8567865C1E46C6f6f4867A8Ff5D861Cfb3b3eae", "0x8D546026012bF75073d8A586f24A5d5ff75b9716", "polygon", 9)
    ```

3. If the network is Ethereum:

    ```
    = GETTOKENBALANCE("0xB8567865C1E46C6f6f4867A8Ff5D861Cfb3b3eae", "0x8D546026012bF75073d8A586f24A5d5ff75b9716", "ethereum", 9)
    ```

