# Token Snapshot: Create BEP20 Token Snapshot

This command-line utility creates a snapshot of any BEP20 token in JSON or CSV format. 

- Works without a local Binance Smart Chain node.
- Automatically resumes the next time upon failure.

## Getting Started

```
npm install
```

### CLI Arguments

None. Prompts for user input and produces a configuration file on the first run.

### How to Use Token Snapshot?

Navigate to a directory where you'd like to save the token snapshot to.

```
cd path/to/a/directory
```

Run the program:

```
npm run index
```



### provider

Enter your fully synced Binance node. Could be a local node.

### contractAddress

Address of your BEP20 token.

### fromBlock

The block height to scan from. To save time, enter the block number of the transaction your token was created on.

### toBlock

The block height to end the scan at.

### blocksPerBatch

The number of blocks to query per batch.

If you are using remote service keep this number relative low (2000-5000) to avoid rate limits. If you are using a dedicated node, you can increase this number to suit your needs.

### delay

The delay (in ms) between each request in the loop. Tweak this if you are experiencing rate limit from your provider.

### checkIfContract

Checks each address to determine whether it is a smart contract or an BSC wallet.
